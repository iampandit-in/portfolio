import Link from "next/link";

export default function Footer() {
  return (
    <footer className="space-y-3 pt-2">
      <div className="text-muted-foreground flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
        <p>(c) {new Date().getFullYear()} Pandit Pawar</p>
        <div className="flex items-center gap-4">
          <Link href="mailto:iampandit.in@gmail.com">Email</Link>
          <Link
            href="https://github.com/iampandit-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://x.com/iampandit_in"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </Link>
        </div>
      </div>
    </footer>
  );
}
