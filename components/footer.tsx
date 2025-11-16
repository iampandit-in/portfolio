import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-muted-foreground mt-12 px-4 text-center">
      <footer>
        <p>Pandit Pawar &copy; 2025</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link
            className="hover:text-primary transition-all"
            href="https://github.com/panditpawar"
          >
            Github
          </Link>
          <Link
            className="hover:text-primary transition-all"
            href="https://www.linkedin.com/in/pandit-pawar-634b621ba/"
          >
            LinkedIn
          </Link>
          <Link
            className="hover:text-primary transition-all"
            href="https://twitter.com/panditpawar"
          >
            Twitter
          </Link>
        </div>
      </footer>
    </div>
  );
}
