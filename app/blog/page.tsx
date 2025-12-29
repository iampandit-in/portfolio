import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Blogs",
  description: "All of my blogs and engineering decisions",
};

export default async function AllBlogs() {
  const AllBlogs = await getBlogs();
  return (
    <div>
      <h2 className="mt-4 mb-8 text-2xl">All Blogs</h2>
      <div className="space-y-4">
        {AllBlogs.map((blog, idx) => (
          <Link
            className="flex items-center justify-between border-b py-2 transition-colors hover:border-red-400/50"
            key={idx}
            href={`/blog/${blog.slug}`}
          >
            <p className="transition-colors hover:text-red-400">{blog.title}</p>
            <p className="text-muted-foreground text-sm">
              {new Date(blog.date).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
