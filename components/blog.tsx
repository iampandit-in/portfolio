import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Blog() {
  return (
    <div>
      <div className="mx-auto mb-4 max-w-4xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="hover hover:text-primary text-xl font-medium transition-all">
            + Blogs
          </h1>
          <Link
            href="https://github.com/iampandit-in"
            target="_blank"
            className="hover:text-primary group flex items-center gap-2 transition-all"
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
                className="group text-muted-foreground flex items-center justify-between gap-2 transition-all hover:text-red-400"
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
                className="group text-muted-foreground flex items-center justify-between gap-2 transition-all hover:text-red-400"
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
                className="group text-muted-foreground flex items-center justify-between gap-2 transition-all hover:text-red-400"
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
