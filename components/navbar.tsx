import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="flex items-center justify-between container">
        <Link className="flex items-center gap-4" href={"/"}>
          <Image src={"/pandit.jpg"} alt="logo" width={70} height={70} />
          <div>
            <h1 className="text-xl font-medium">Pandit Pawar</h1>
            <p className="">Software Engineer</p>
          </div>
        </Link>
        <nav>
          <Button className="hover:bg-red-300" size={"lg"}>
            Home
          </Button>
          <Button size={"lg"}>Blog</Button>
          <Button size={"lg"}>Projects</Button>
          <Button size={"lg"}>Contact</Button>
        </nav>
      </div>
    </header>
  );
}
