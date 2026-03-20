import { Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { getAllProjects } from "@/utils/projects";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section className="section-shell">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="section-title mb-0">Selected Projects</h2>
        <Button size="sm" variant="ghost" asChild>
          <Link href="/projects">
            All Projects
            <ArrowUpRight size={14} />
          </Link>
        </Button>
      </div>
      <div className="grid gap-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="bg-background/70 rounded-xl border p-4 transition-colors hover:border-primary/35"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                href={`/project/${project.slug}`}
                className="text-base font-semibold hover:text-primary"
              >
                {project.project}
              </Link>
              <div className="flex items-center gap-2">
                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.github} target="_blank">
                      <Avatar className="h-4 w-4">
                        <AvatarImage
                          src={"https://cdn.simpleicons.org/github/f5f5f5"}
                        />
                      </Avatar>
                      Source
                    </Link>
                  </Button>
                )}
                {project.website && (
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.website} target="_blank">
                      <Globe size={14} />
                      Live
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm sm:text-base">
              {project.description.map((desc, descIdx) => (
                <li key={descIdx}>{desc}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech.name} className="chip inline-flex items-center gap-2">
                  <Avatar className="h-4 w-4">
                    <AvatarImage src={tech.icon} alt={tech.name} />
                  </Avatar>
                  {tech.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
