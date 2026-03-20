import Blog from "@/components/blog";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { BadgeCheck, Brackets, Mail, MapPin, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="section-shell relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-10 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={"/pandit.png"}
              height={100}
              width={100}
              alt="Pandit Pawar profile photo"
              className="h-20 w-20 rounded-2xl border object-cover shadow-sm"
            />
            <div>
              <h1 className="flex items-center gap-2 text-2xl font-semibold sm:text-3xl">
                <Target className="text-primary" size={20} /> Pandit Pawar
              </h1>
              <p className="text-muted-foreground mt-2 flex items-center gap-2 text-sm sm:text-base">
                <Brackets size={16} /> Fullstack Developer
              </p>
              <p className="text-muted-foreground mt-1 flex items-center gap-2 text-sm sm:text-base">
                <MapPin size={16} /> Maharashtra, India
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link href="mailto:iampandit.in@gmail.com">
                <Mail size={16} />
                Contact
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground mt-6 max-w-3xl text-sm leading-relaxed sm:text-base">
          CS undergrad focused on backend systems and production-ready APIs. I
          enjoy solving practical engineering problems, building maintainable
          services, and shipping products with clear technical tradeoffs.
        </p>
      </section>

      <section className="section-shell">
        <h2 className="section-title">Experience</h2>
        <div className="rounded-xl border p-4">
          <p className="flex items-center gap-2 text-base font-medium sm:text-lg">
            <BadgeCheck className="text-primary" size={18} /> Diploma Trainee
            Engineer
          </p>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Bajaj Auto Limited | Sep 2025 - Present
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm sm:text-base">
            <li>
              Support day-to-day operations in high-volume two-wheeler and
              three-wheeler manufacturing workflows.
            </li>
            <li>
              Assist inspection, quality checks, and documentation aligned with
              plant operating procedures.
            </li>
          </ul>
        </div>
      </section>

      <Projects />
      <Blog />
      <Skills />
      <Footer />
    </div>
  );
}
