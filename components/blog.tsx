import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  return (
    <div>
      <div className="mx-auto mb-4 max-w-4xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="hover hover:text-primary text-lg font-medium transition-all md:text-xl">
            + Blogs
          </h1>
          <Link
            href="/blogs"
            className="hover:text-primary group flex items-center gap-2 text-sm transition-all md:text-base"
          >
            All Blogs
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
        </div>
        <div className="mt-4 grid gap-2">
          <Card>
            <CardContent>
              <Link
                className="group text-muted-foreground flex items-center justify-between gap-2 text-sm transition-all hover:text-red-400 md:text-base"
                href={"/"}
              >
                Fullstack E-commerce Platform for Fashion Brand
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:mb-1"
                />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Link
                className="group text-muted-foreground flex items-center justify-between gap-2 text-sm transition-all hover:text-red-400 md:text-base"
                href={"/"}
              >
                Built a real-time chat application using React.js, Node.js, and
                WebSockets. Implemented
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:mb-1"
                />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Link
                className="group text-muted-foreground flex items-center justify-between gap-2 text-sm transition-all hover:text-red-400 md:text-base"
                href={"/"}
              >
                Built a fullstack blogging platform using React.js, Node.js, and
                MongoDB. Implemented features such a
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:mb-1"
                />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
