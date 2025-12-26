import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      post: {
        title: "Building Scalable Backend APIs with Node.js and Express",
        slug: "slug-gggg-ggg-ggg",
      },
    },
    {
      post: {
        title: "Demystifying Fullstack Development: A Beginner's Guide",
        slug: "gekdud-ergfger-ergerge-erfe",
      },
    },
    {
      post: {
        title: "Optimizing Database Performance in Backend Applications",
        slug: "dfkjvhd-egefger-erferf-",
      },
    },
  ];

  return (
    <section className="mt-10">
      <p className="text-lg sm:text-xl">+ blog</p>
      <div className="mt-4 space-y-4">
        {blogPosts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts yet.</p>
        ) : (
          blogPosts.map((post) => (
            <Link
              href={`/blog/${post.post.slug}`}
              className="group flex shrink-0 items-start justify-between gap-4 sm:items-center"
              aria-label={`Read more about ${post.post.title}`}
              key={post.post.slug}
            >
              <div className="min-w-0 flex-1">
                <p className="cursor-pointer text-sm transition-all hover:text-red-400 sm:text-base">
                  {post.post.title}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="transition-all group-hover:text-red-400"
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
