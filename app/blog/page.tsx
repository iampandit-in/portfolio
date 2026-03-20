import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Blog</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {sortedBlogs.map((blog) => (
            <div key={blog.slug} className="flex items-center justify-between text-sm">
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
    </div>
  );
}
