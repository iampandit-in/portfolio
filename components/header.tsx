import { Brackets, MapPin } from "lucide-react";

export default function Header() {
  return (
    <div className="mt-10">
      <div className="mx-auto mt-18 mb-4 max-w-4xl p-4">
        <div className="text-muted-foreground mb-1 flex items-center text-sm md:text-base">
          <MapPin className="mr-2" size={16} /> Chh. Sambhajinagar, India
        </div>
        <div className="text-muted-foreground flex items-center text-sm md:text-base">
          <Brackets className="mr-2" size={16} /> Full Stack Developer
        </div>
        <p className="mt-4 text-sm md:text-lg">
          i&apos;m a 20 y/o fullstack developer. i love building things and
          solving problems. i enjoy language design, theoretical computer
          science and i live on the terminal. if i&apos;m not coding, i&apos;m
          probably doing cardistry, watching movies or obsessing over mechanical
          keyboards.
        </p>
      </div>
    </div>
  );
}
