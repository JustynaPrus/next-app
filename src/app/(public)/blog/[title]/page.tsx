import React from 'react';
import { notFound } from 'next/navigation';

import { MdxContent } from '@/app/MdxContent';

import { getPost, getPostsFileNames } from './blogUtils';


const BlogSlug = async ({ params }: { params: { title: string } }) => {
  const post = await getPost(params.title);
  if (!post) {
    return notFound();
  }
  return <MdxContent source={post.serialized} />;
};

export default BlogSlug;

export async function generateStaticParams() {
  const fileNames = await getPostsFileNames();
  return fileNames.map((post) => ({
    title: post,
  }));
}
