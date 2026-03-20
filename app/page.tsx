import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";
import Experience from "@/components/experience";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Image
              src="/pandit.jpeg"
              alt="Pandit Pawar"
              width={100}
              height={100}
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-semibold">Pandit Pawar</p>
              <p className="text-muted-foreground text-sm">
                Fullstack Developer
              </p>
              <p className="text-muted-foreground text-sm">
                Maharashtra, India
              </p>
            </div>
          </div>
          <p>
            i&apos;m a 20 y/o cs undergrad student. i love building things and
            solving problems. i enjoy programming, theoretical computer science
            and learning new things. if i&apos;m not coding, i&apos;m probably
            watching movies or series.
          </p>
        </div>
      </div>
      <Experience />
      <Projects />
      <Blog />
      <Skills />
      <Footer />
    </div>
  );
}
