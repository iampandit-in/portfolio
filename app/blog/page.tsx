import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Blogs",
  description: "All of my blogs and engineering decisions",
};

export default async function AllBlogs() {
  const blogs = await getBlogs();
  const sortedBlogs = blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="space-y-6">
      <section className="section-shell">
        <h1 className="text-2xl font-semibold sm:text-3xl">Blog</h1>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          Notes on engineering, systems thinking, and practical decisions while
          building software.
        </p>
      </section>
      <section className="section-shell">
        <div className="space-y-3">
          {sortedBlogs.map((blog, idx) => (
          <Link
            className="bg-background/70 hover:border-primary/35 flex items-center justify-between rounded-xl border px-4 py-3 transition-colors"
            key={idx}
            href={`/blog/${blog.slug}`}
          >
            <div>
              <p className="font-medium">{blog.title}</p>
              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                Read article
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-muted-foreground text-xs sm:text-sm">
                {new Date(blog.date).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <ArrowUpRight size={14} className="text-muted-foreground" />
            </div>
          </Link>
        ))}
        </div>
      </section>
    </div>
  );
}
