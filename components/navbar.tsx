import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-4">
        <Link className="flex items-center gap-3" href={"/"}>
          <Popover>
            <PopoverTrigger className="cursor-pointer">
              <Image
                src={"/cool-pandit.webp"}
                alt="logo"
                width={100}
                height={100}
                className="h-9 w-9 rounded-full object-cover"
              />
            </PopoverTrigger>
            <PopoverContent className="flex min-w-md gap-4">
              <Image
                src={"/cool-pandit.webp"}
                alt="logo"
                width={100}
                height={100}
                className="h-30 w-30"
              />
              <div>
                <h1 className="text-lg">Pandit Pawar</h1>
                <Link
                  className="hover:text-primary group mt-2 flex items-center gap-2 text-sm transition-all"
                  href="/about"
                >
                  About me{" "}
                  <ArrowUpRight
                    className="transition-all group-hover:mb-2"
                    size={14}
                  />
                </Link>
                <div>
                  <p className="mt-2 text-sm">Why are you looking at me 👀</p>
                  <p className="text-sm">Just hire me already.</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <div></div>
        </Link>
        <nav className="flex items-center gap-4">
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
            href={"/"}
          >
            Projects
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
          <Link
            className="group flex items-center gap-2 transition-all hover:text-red-400"
            href={"/"}
          >
            Blog
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
          <Link
            className="group flex items-center gap-2 transition-all hover:text-red-400"
            href={"/"}
          >
            Connect
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
