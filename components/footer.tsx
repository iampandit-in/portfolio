import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t">
      <div className="text-muted-foreground mx-auto max-w-4xl p-4">
        <footer className="flex items-center justify-between">
          <div>
            <p className="text-sm">Pandit Pawar &copy; 2025</p>
            <Link
              href={"/about"}
              className="group hover:text-primary flex items-center gap-2 text-sm transition-all"
            >
              About me{" "}
              <ArrowUpRight
                className="transition-all group-hover:mb-1"
                size={16}
              />
            </Link>
          </div>
          <div className="mt-2 flex justify-center gap-4">
            <div>
              <Link
                className="group hover:text-primary flex items-center gap-2 text-sm transition-all"
                href="https://github.com/panditpawar"
              >
                Github
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:mb-1"
                />
              </Link>
              <Link
                className="hover:text-primary group flex items-center gap-2 text-sm transition-all"
                href="https://www.linkedin.com/in/pandit-pawar-634b621ba/"
              >
                Linked In
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:mb-1"
                />
              </Link>
              <Link
                className="hover:text-primary group flex items-center gap-2 text-sm transition-all"
                href="https://twitter.com/panditpawar"
              >
                Twitter
                <ArrowUpRight
                  size={20}
                  className="transition-all group-hover:mb-1"
                />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
