import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogs } from "@/utils/mdx";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All Blogs",
  description: "All Blogs - Pandit portfolio",
};

export default async function Blogs() {
  const allBlogs = await getBlogs();
  console.log(allBlogs);
  return (
    <div className="mx-auto mt-20 max-w-4xl p-4">
      <h1 className="text-lg md:text-xl">All Blogs</h1>
      <div className="mt-6 grid gap-2">
        {allBlogs.map((blog) => (
          <Card key={blog.slug}>
            <CardContent>
              <Link
                className="group text-muted-foreground flex items-center justify-between gap-2 text-sm transition-all hover:text-red-400 md:text-base"
                href={`blogs/${blog.slug}`}
              >
                <div className="flex gap-4">
                  <Image
                    src={blog.image || ""}
                    alt={blog.title || ""}
                    width={100}
                    height={100}
                    className="min-h-full rounded-md object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">{blog.title}</h2>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {blog.date}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:mb-1"
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
