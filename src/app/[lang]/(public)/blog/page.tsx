import type { Metadata } from "next";
import Link from "next/link";

import { getPostsFileNames } from "./[title]/blogUtils";

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
