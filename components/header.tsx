import { Button } from "./ui/button";

export default function Header() {
  return (
    <header>
      <div className="max-w-3xl mx-auto p-4 flex items-center justify-between">
        <h1>pandit</h1>
        <nav>
          <Button variant={"link"}>github</Button>
          <Button variant={"link"}>x</Button>
          <Button variant={"link"}>youtube</Button>
        </nav>
      </div>
    </header>
  );
}
