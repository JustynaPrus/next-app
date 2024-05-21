import { Metadata } from 'next';
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

import { getHotel } from "@/clientApi/hotel";
import { getHotelReviews } from "@/clientApi/hotelReviews";
import { getHotelsIds } from "@/clientApi/hotelsIds";
import Form from "@/components/Form/Form";

const AddReview = `
  mutation AddReviewMutation($id: ID!, $attribution: String!, $content: String!) {
    createReview(
      data: {
        hotel: { connect: { id: $id } }
        attribution: $attribution
        content: $content
      }
    ) {
      id
      attribution
      content
    }
  }
`;

const PublishReview = `
  mutation PublishReviewMutation($id: ID!) {
    publishReview(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

const addReview = async (id: string, attribution: string, content: string) => {
  const res = await fetch(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clu8undly00cp08jp0hmp0sxf/master",
    {
      method: "POST",
      body: JSON.stringify({
        query: AddReview,
        variables: { id, attribution, content },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const graphqlResponse = await res.json();
  if (graphqlResponse.errors) {
    console.log("graphql err", graphqlResponse.errors);
    throw TypeError(`GRAPHQL Error`, { cause: graphqlResponse.errors });
  } else {
    await publishReview(graphqlResponse.data.createReview.id);
  }

  return graphqlResponse.data;
};

const publishReview = async (id: string) => {
  const res = await fetch(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clu8undly00cp08jp0hmp0sxf/master",
    {
      method: "POST",
      body: JSON.stringify({
        query: PublishReview,
        variables: { id },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const graphqlResponse = await res.json();
  if (graphqlResponse.errors) {
    console.log("graphql err", graphqlResponse.errors);
    throw TypeError(`GRAPHQL Error`, { cause: graphqlResponse.errors });
  }

  return graphqlResponse.data;
};

type HotelPageProps={
  slug:string;
}

export default async function Hotel({ params }: { params: HotelPageProps }) {
  const { slug } = params;

  const [hotel, reviews] = await Promise.all([
    getHotel(slug),
    getHotelReviews(slug),
  ]);

  if (!hotel) {
    notFound();
  }

  const onReviewSubmit = async ({
    attribution,
    content,
  }: {
    attribution: string;
    content: string;
  }) => {
    "use server";

    const resp = await addReview(slug, attribution, content);
    revalidatePath("/hotels/[slug]","page")
    // const test = await fetch("/api/revalidate?path=/hotels/[slug]");
    // console.log(test);
  };

  return (
    <main>
      <p>
        Hotel: <b>{hotel.hotel?.name}</b>
      </p>
      <Form onSubmit={onReviewSubmit} />
      <div>
        <h2>Reviews</h2>
        {reviews.reviews?.map((review) => {
          return <p key={review.id}>{review.content}</p>;
        })}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const data = await getHotelsIds();

  return data.hotels.map((hotel) => ({
    slug: hotel.id,
  }));
}

export async function generateMetadata(
  { params }: {params: HotelPageProps},
): Promise<Metadata> {
  const id = params.slug
 
  // fetch data
  const {hotel} = await getHotel(id)
  if(!hotel){
    notFound()
  }
 
  return {
    title: hotel.name,
  }
}