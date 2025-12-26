import { Github, Mail, X } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-6 mt-10 flex justify-between">
      <p className="text-muted-foreground text-sm sm:text-base">
        © {new Date().getFullYear()} pandit pawar. all rights reserved.
      </p>
      <span className="text-muted-foreground gap-4 text-sm sm:flex sm:text-base">
        <Link
          className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
          href="https://x.com/iampandit_in"
        >
          <X size={18} />
          tweeter
        </Link>
        <Link
          className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
          href="https://github.com/iampandit-in"
        >
          <Github size={18} />
          github
        </Link>
        <Link
          className="group hover:text-primary flex items-center gap-2 transition-all duration-300"
          href="mailto:iampandit.in@gmail.com"
        >
          <Mail size={18} />
          mail
        </Link>
      </span>
    </footer>
  );
}
