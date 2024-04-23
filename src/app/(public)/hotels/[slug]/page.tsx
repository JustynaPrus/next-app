import { notFound } from "next/navigation";
import { getClient } from "@/graphql";
import { gql } from "@apollo/client";
import Form from "@/components/Form/Form";
import { revalidatePath } from "next/cache";

const GetHotelsIds = gql`
  query Hotel {
    hotels {
      id
    }
  }
`;

const GetHotelById = gql`
  query HotelById($id: ID!) {
    hotel(where: { id: $id }) {
      slug
      name
    }
  }
`;

const GetHotelReviews = gql`
  query Review($id: ID!) {
    reviews(where: { hotel: { id: $id } }) {
      attribution
      id
      content
    }
  }
`;

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

type Hotel = {
  id: string;
  name: string;
  slug: string;
};

type Review = {
  attribution: string;
  id: string;
  content: string;
};

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

async function getHotelReviews(slug: string) {
  const results = await getClient().query({
    query: GetHotelReviews,
    variables: { id: slug },
  });

  return results.data.reviews;
}

async function getHotel(slug: string) {
  const results = await getClient().query({
    query: GetHotelById,
    variables: { id: slug },
  });

  return results.data.hotel;
}

export default async function Hotel({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const [hotel, reviews] = await Promise.all([
    getHotel(slug),
    getHotelReviews(slug),
  ]);

  if (!hotel) {
    notFound();
  }

  const onReviewSubmit = async ({
    content,
    attribution,
  }: {
    content: string;
    attribution: string;
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
        Hotel: <b>{hotel.name}</b>
      </p>
      <Form onSubmit={onReviewSubmit} />
      <div>
        <h2>Reviews</h2>
        {reviews?.map((review: Review) => {
          return <p key={review.id}>{review.content}</p>;
        })}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const { data } = await getClient().query({ query: GetHotelsIds });

  return data.hotels.map((hotel: Hotel) => ({
    slug: hotel.id,
  }));
}
