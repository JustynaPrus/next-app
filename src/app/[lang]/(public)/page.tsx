import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travelers Blog | Home",
  description: "Page for people who love to travel",
};

export default function Home() {
  return (
    <main>
      <p>Home page</p>
    </main>
  );
}
