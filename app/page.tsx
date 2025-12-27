import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Brackets, MapPin, Target } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* HERO */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/pandit.png"}
            height={100}
            width={100}
            alt="Pandit"
            className="h-20 w-20"
          />
          <div>
            <h2 className="mb-1 flex items-center gap-2 text-base sm:text-xl">
              <Target className="text-muted-foreground" size={18} /> Pandit
              Pawar
            </h2>
            <span className="text-muted-foreground">
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <Brackets size={18} /> backend developer
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm sm:text-base">
                <MapPin size={18} /> maharashtra, india
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm sm:text-base">
          i&apos;m a 20 y/o cs undergrad student. i love building things and
          solving problems. i enjoy programming, theoretical computer science
          and learning new things. if i&apos;m not coding, i&apos;m probably
          watching movies or series.
        </p>
      </div>
      {/* EXPERIENCE */}
      <div className="mt-10">
        <h3 className="mb-2 text-lg sm:text-xl">+ experience</h3>
        <p className="text-red-400 sm:text-lg">diploma trainee engineer</p>
        <p className="text-muted-foreground cursor-pointer text-sm sm:text-base">
          Bajaj Auto Limited | Sep 2025 - Present
        </p>
        <ul className="list-inside list-disc text-sm">
          <li>
            Support day-to-day operations in a high-volume two-wheeler and
            three-wheeler manufacturing environment.
          </li>
          <li>
            Assist in basic inspection, verification and documentation of
            vehicles as per standard operating procedures.
          </li>
        </ul>
      </div>
      {/* PROJECTS */}
      <Projects />
      {/* BLOG */}
      <Blog />
      {/* SKILLS */}
      <Skills />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
