import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About company",
  description: "Page for people who love to travel",
};

export default function About() {
  return (
    <main>
      <p>About page</p>
    </main>
  );
}
