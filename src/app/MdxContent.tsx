'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};
type MDXProps = { children: React.ReactNode };

const MdxComponents = {
  BlogLayout: ({children}:MDXProps)=><div style={{backgroundColor: "blue"}}>{children}</div>,
  a: ({ children, href }: MDXProps & { href: string }) => (
    <a href={href}>{children}</a>
  ),
  h1: ({ children }: MDXProps) => <h1 >{children}</h1>,
  p: ({ children }: MDXProps) => <p>{children}</p>,
};

export const MdxContent = ({ source }: MdxContentProps) => {
  //@ts-ignore
  return <MDXRemote {...source} components={MdxComponents} />;
}