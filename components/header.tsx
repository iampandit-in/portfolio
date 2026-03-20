"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="mx-auto max-w-3xl px-4 pt-6 pb-4 sm:px-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-4 text-sm">
            {links.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "font-semibold" : "text-muted-foreground"}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Button>
              <Link href="mailto:iampandit.in@gmail.com">Hire me</Link>
            </Button>
            <Button variant="outline">
              <Link
                href="https://github.com/iampandit-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
