import { getBlogs } from "@/utils/mdx";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default async function Blog() {
  const blogs = await getBlogs();
  const latest = blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (latest.length === 0) {
    return null;
  }

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Blog</h2>
        <Link href="/blog" className="text-sm">
          View all
        </Link>
      </div>
      <Card>
        <CardContent className="space-y-3">
          {latest.map((blog) => (
            <div
              key={blog.slug}
              className="flex items-center justify-between text-sm"
            >
              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              <span className="text-muted-foreground">
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
