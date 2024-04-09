export async function generateStaticParams() {

  const blogPosts=["title-1","title-2"]
  return blogPosts.map((post) => ({
    title: post,
  }));
}

export default function BlogPage({ params }: { params: { title: string } }) {
  const { title } = params;

  return (
    <main>
      <p>
        Title: <span>{title}</span>
      </p>
    </main>
  );
}
