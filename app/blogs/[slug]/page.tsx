import { getSingleBlog } from "@/utils/mdx";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blogs");
  }

  return (
    <article className="prose prose-invert mx-auto mt-20 max-w-4xl p-4">
      <h1>{blog?.frontmatter.title}</h1>
      <div className="-mt-10 flex items-center gap-2">
        <p className="text-muted-foreground">{blog?.frontmatter.author}</p>
        <p className="text-muted-foreground">•</p>
        <p className="text-muted-foreground">{blog?.frontmatter.date}</p>
      </div>
      <Image
        src={blog?.frontmatter.image}
        alt={blog?.frontmatter.title}
        width={1000}
        height={1000}
        loading="lazy"
        quality={90}
        className="max-h-80 w-full object-cover"
      />
      <div className="mt-6">{blog?.content}</div>
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blogs");
  }

  return {
    title: blog?.frontmatter.title,
    description: blog?.frontmatter.description,
    image: blog?.frontmatter.image,
  };
}
