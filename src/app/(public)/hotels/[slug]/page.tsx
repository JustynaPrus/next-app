import { notFound } from "next/navigation";
import { getClient } from "@/graphql";
import { gql } from "@apollo/client";
import Form from "@/components/Form/Form";

export const dynamicParams = false;

const GetTimeQuery = gql`
  query Hotel {
    hotels {
      name
      slug
    }
  }
`;

type Hotel = {
  name: string;
  slug: string;
};

async function getHotel(slug: string) {
  const results = await getClient().query({ query: GetTimeQuery });

  return results.data.hotels.find((hotel: Hotel) => hotel.slug === slug);
}

export default async function Hotel({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const hotelName = await getHotel(slug);

  if (!hotelName) {
    notFound();
  }

  return (
    <main>
      <p>
        Hotel: <b>{hotelName.name}</b>
      </p>
      <Form/>
    </main>
  );
}

export async function generateStaticParams() {
  const results = await getClient().query({ query: GetTimeQuery });

  return results.data.hotels.map((hotel: Hotel) => ({
    slug: hotel.slug,
  }));
}
