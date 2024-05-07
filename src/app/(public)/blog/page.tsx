import type { Metadata } from "next";
import { getPostsFileNames } from "./[title]/blogUtils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travelers Blog",
  description: "Page for people who love to travel",
};

export default async function Blog() {
  const links=await getPostsFileNames()
  return (
    <main>
      {links.map(el=><Link key={el} href={el}>{el}</Link>)}
    </main>
  );
}
