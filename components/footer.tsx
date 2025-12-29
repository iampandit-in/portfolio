import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="my-6 mt-10 flex items-center justify-between">
      <p className="text-muted-foreground text-sm sm:text-base">
        © {new Date().getFullYear()} designed & created by pandit. all rights
        reserved.
      </p>
      <Link href={"mailto:iampandit.in@gmal.com"} target="_blank">
        <Mail size={18} />
      </Link>
    </footer>
  );
}
