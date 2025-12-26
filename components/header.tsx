import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-lg">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <Link href={"/"}>
          <h1>Home</h1>
        </Link>
        <nav></nav>
      </div>
    </header>
  );
}
