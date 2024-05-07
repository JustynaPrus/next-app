import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import 'server-only';

export type FrontmatterData={
    title: string;
    author: string;
    desc: string;
    imageName: string;
    publishedAt:string;
    tags:string
  }

type Post = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: FrontmatterData;
};

export const getPostsFileNames = () => {
  const dir = path.join(process.cwd(), '/src/app/(public)/blog/[title]/blogPosts');
  const NAME_PART = 0;
  const fileNames = fs.readdirSync(path.join(dir)).map((file) => file.split('.')[NAME_PART]);
  return fileNames;
};

export const getPost = async (slug: string) => {
  try {
    const raw = await fs.readFileSync(
      path.join(process.cwd(), `/src/app/(public)/blog/[title]/blogPosts/${slug}.mdx`),
      'utf-8',
    );
    const serialized = await serialize(raw, {
      parseFrontmatter: true, // włącza serializację frontmattera
    });
    return { frontmatter: serialized.frontmatter, serialized } as Post
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    throw new Error("Can't parse post!");
  }
};