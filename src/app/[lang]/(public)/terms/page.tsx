import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
};

export default function Terms() {
  return (
    <main>
      <p>Terms page</p>
      <p>{process.env.USER}</p>
    </main>
  );
}
