"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-lg">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <span className="flex items-center gap-4">
          <Link href={"/"} className={pathname === "/" ? "text-red-400" : ""}>
            Home
          </Link>

          <Link
            href={"/projects"}
            className={pathname === "/projects" ? "text-red-400" : ""}
          >
            Projects
          </Link>
          <Link
            href={"/blog"}
            className={pathname === "/blog" ? "text-red-400" : ""}
          >
            Blog
          </Link>
        </span>
        <nav>
          <span className="flex items-center gap-1">
            <Button size={"icon-xs"} variant={"outline"} asChild>
              <Link
                className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
                href="https://x.com/iampandit_in"
                target="_blank"
              >
                <Avatar className="h-4 w-4">
                  <AvatarImage src={"https://cdn.simpleicons.org/x/f5f5f5"} />
                </Avatar>
              </Link>
            </Button>
            <Button size={"icon-xs"} variant={"outline"} asChild>
              <Link
                className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
                href="https://github.com/iampandit-in"
                target="_blank"
              >
                <Avatar className="h-4 w-4">
                  <AvatarImage
                    src={"https://cdn.simpleicons.org/github/f5f5f5"}
                  />
                </Avatar>
              </Link>
            </Button>
            <Button size={"icon-xs"} variant={"outline"} asChild>
              <Link
                className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
                href="https://www.youtube.com/@iampandit-in"
                target="_blank"
              >
                <Avatar className="h-4 w-4">
                  <AvatarImage src={"https://cdn.simpleicons.org/youtube"} />
                </Avatar>
              </Link>
            </Button>
          </span>
        </nav>
      </div>
    </header>
  );
}
