import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <Link className="flex items-center gap-3" href={"/"}>
          <Image
            src={"/cool-pandit.webp"}
            alt="logo"
            width={100}
            height={100}
            className="h-9 w-9 rounded-full object-cover"
          />
          <p className="font-medium md:text-xl">Pandit Pawar</p>
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            className="group flex items-center gap-2 transition-all hover:text-red-400"
            href={"/"}
          >
            Home
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
          <Link
            className="group flex items-center gap-2 transition-all hover:text-red-400"
            href={"/projects"}
          >
            Projects
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
          <Link
            className="group flex items-center gap-2 transition-all hover:text-red-400"
            href={"/blogs"}
          >
            Blog
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
          <Link
            className="group flex items-center gap-2 transition-all hover:text-red-400"
            href={"/connect"}
          >
            Connect
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
        </nav>
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col items-center justify-center gap-4">
                <SheetClose asChild>
                  <Link href={"/"}>Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/projects"}>Projects</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/blogs"}>Blog</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={"/connect"}>Connect</Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
