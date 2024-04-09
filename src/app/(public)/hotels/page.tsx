export const dynamic = "force-dynamic";

import Link from "next/link";

import { getClient } from "@/graphql";
import { gql } from "@apollo/client";

const GetTimeQuery = gql`
  query Hotel {
    hotels {
      id
      name
      description
      slug
    }
  }
`;

type Hotel = {
  id: number;
  name: string;
  description: string;
  slug: string;
};

export default async function Hotels() {
  const results = await getClient().query({ query: GetTimeQuery });
  const hotels = results.data.hotels;

  return (
    <main>
      <h1>Hotels page</h1>
      {hotels.map((hotel: Hotel) => (
        <Link key={hotel.id} href={`/hotels/${hotel.slug}`}>
          <p>{hotel.name}</p>
        </Link>
      ))}
    </main>
  );
}
