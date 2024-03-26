import Image from "next/image";

export default function Travelers() {
  return (
    <main>
      <p>Travelers page</p>
      <Image
        width={500}
        height={800}
        alt="random foto"
        src="https://picsum.photos/500/800"
      />
    </main>
  );
}
