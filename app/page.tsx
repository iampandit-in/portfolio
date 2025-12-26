import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Brackets, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* HERO */}
      <div className="flex items-center gap-4">
        <Image
          src={"/pandit.png"}
          height={100}
          width={100}
          alt="Pandit"
          className="h-20 w-20"
        />
        <div>
          <h2 className="mb-1 text-lg sm:text-xl">Pandit Pawar</h2>
          <span className="text-muted-foreground">
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <Brackets size={18} /> backend developer
            </p>
            <p className="flex items-center gap-2 text-sm sm:text-base">
              <MapPin size={18} /> maharashtra, india
            </p>
          </span>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm sm:text-base">
          i'm a 20 y/o cs undergrad student. i love building things and solving
          problems. i enjoy programming, theoretical computer science and
          learning new things. if i'm not coding, i'm probably watching movies
          or series.
        </p>
      </div>
      {/* EXPERIENCE */}
      <div className="mt-10">
        <h3 className="mb-2 text-lg sm:text-xl">+ experience</h3>
        <p className="sm:text-lg">diploma trainee engineer</p>
        <p className="text-muted-foreground cursor-pointer text-sm hover:text-red-400 sm:text-base">
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
