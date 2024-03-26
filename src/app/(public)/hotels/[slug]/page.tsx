import { getData } from "@/utils/utils";

// function generateStaticParams() {
//   const hotels = getData();

//   return hotels.map((hotel) => ({
//     slug: hotel.slug,
//   }));
// }

export default function Hotel({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <main>
      <p>
        Hotel id: <span>{slug}</span>
      </p>
    </main>
  );
}
