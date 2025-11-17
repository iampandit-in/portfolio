import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <div className="mx-auto mt-20 max-w-4xl p-4">
      <h1 className="text-lg md:text-xl">All Blogs</h1>
      <div className="mt-6 grid gap-2">
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
              Fullstack E-commerce Platform for Fashion Brand
              <ArrowUpRight
                size={20}
                className="transition-all group-hover:mb-1"
              />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
