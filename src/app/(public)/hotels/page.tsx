import Link from "next/link";

import { getAllHotels } from "@/clientApi/hotels";

export default async function Hotels() {
  const results = await getAllHotels();

  return (
    <main>
      <h1>Hotels page</h1>
     {results.hotels.map((hotel) => (
        <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
          <p>{hotel.name}</p>
        </Link>
      ))}
    </main>
  );
}
