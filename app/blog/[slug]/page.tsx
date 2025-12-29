import { compileMDX } from "next-mdx-remote/rsc";
import { getSingleBlog, getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type FrontMatter = {
  title: string;
  description: string;
  author: string;
  date: string;
  tags?: string[];
};

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const blog = await getSingleBlog(slug);
    const { frontmatter } = await compileMDX<FrontMatter>({
      source: blog,
      options: { parseFrontmatter: true },
    });

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      authors: [{ name: frontmatter.author }],
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
        authors: [frontmatter.author],
        tags: frontmatter.tags,
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.title,
        description: frontmatter.description,
      },
    };
  } catch {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const blog = await getSingleBlog(slug);
    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: blog,
      options: { parseFrontmatter: true },
    });

    return (
      <article>
        <h1>{frontmatter.title}</h1>
        {content}
      </article>
    );
  } catch {
    notFound();
  }
}
