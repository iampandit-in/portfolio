import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { ReactElement } from "react";

export type Frontmatter = {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  author: string;
};

export const getSingleBlog = async (
  slug: string,
): Promise<{ content: ReactElement; frontmatter: Frontmatter } | null> => {
  try {
    const blog = await fs.readFile(
      path.join(process.cwd(), "app/data", `${slug}.mdx`),
      "utf-8",
    );
    if (!blog) {
      return null;
    }
    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: blog,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter };
  } catch (error) {
    console.log(`Error reading the blog file for slug "${slug}":`, error);
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "app/data"));
  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const frontmatter = await getBlogFrontmatterBySlug(slug);
      return { slug, ...frontmatter };
    }),
  );
  return allBlogs;
};

const getBlogFrontmatterBySlug = async (slug: string) => {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "app/data", `${slug}.mdx`),
    "utf-8",
  );

  if (!singleBlog) {
    return null;
  }
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });
  return frontmatter;
};
