"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-border/70 fixed top-0 right-0 left-0 z-50 border-b bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
        <nav className="bg-muted/70 flex items-center gap-1 rounded-full border p-1">
          {links.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1">
          <Button size="icon-xs" variant="outline" asChild>
            <Link href="mailto:iampandit.in@gmail.com" aria-label="Send email">
              <Mail size={14} />
            </Link>
          </Button>
          <Button size="icon-xs" variant="outline" asChild>
            <Link
              className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
              href="https://github.com/iampandit-in"
              target="_blank"
              aria-label="GitHub profile"
            >
              <Avatar className="h-4 w-4">
                <AvatarImage src={"https://cdn.simpleicons.org/github/f5f5f5"} />
              </Avatar>
            </Link>
          </Button>
          <Button size="icon-xs" variant="outline" asChild>
            <Link
              className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
              href="https://x.com/iampandit_in"
              target="_blank"
              aria-label="X profile"
            >
              <Avatar className="h-4 w-4">
                <AvatarImage src={"https://cdn.simpleicons.org/x/f5f5f5"} />
              </Avatar>
            </Link>
          </Button>
          <div className="ml-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
