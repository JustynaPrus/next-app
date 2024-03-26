export const dynamic = "force-dynamic";

import { getData } from "@/utils/utils";

export default function Hotels() {
  const data = getData();

  return (
    <main>
      <h1>Hotels page</h1>
      {data.map((hotel) => (
        <p key={hotel.id}>{hotel.name}</p>
      ))}
    </main>
  );
}
