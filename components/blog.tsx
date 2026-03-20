import { getBlogs } from "@/utils/mdx";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

export default async function Blog() {
  const blogs = await getBlogs();
  const latest = blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (latest.length === 0) {
    return null;
  }

  return (
    <section className="section-shell">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="section-title mb-0">Latest Writing</h2>
        <Button size="sm" variant="ghost" asChild>
          <Link href="/blog">
            All Posts
            <ArrowUpRight size={14} />
          </Link>
        </Button>
      </div>
      <div className="grid gap-2">
        {latest.map((blog) => (
          <Link
            className="bg-background/70 hover:border-primary/35 flex items-center justify-between rounded-xl border px-4 py-3 transition-colors"
            key={blog.slug}
            href={`/blog/${blog.slug}`}
          >
            <p className="font-medium">{blog.title}</p>
            <p className="text-muted-foreground text-xs sm:text-sm">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
