import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-shell py-4">
      <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Pandit Pawar. Built with Next.js and
          TypeScript.
        </p>
        <div className="text-muted-foreground flex items-center gap-4">
          <Link
            href="mailto:iampandit.in@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            iampandit.in@gmail.com
          </Link>
          <Link
            href="https://github.com/iampandit-in"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://x.com/iampandit_in"
            target="_blank"
            className="hover:text-foreground transition-colors"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}
