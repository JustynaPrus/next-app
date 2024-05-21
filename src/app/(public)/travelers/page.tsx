import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travelers page",
};

import Image from "next/image";

export default function Travelers() {
  return (
    <main>
      <p>Travelers page</p>
      <Image
        alt="random foto"
        height={800}
        src="https://picsum.photos/500/800"
        width={500}
      />
    </main>
  );
}
