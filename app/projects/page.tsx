import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";
import { getAllProjects } from "@/utils/projects";

export default function Projects() {
  const projects = getAllProjects();
  return (
    <section className="mt-4">
      <p className="sm:xl mb-4 text-xl">All projects</p>
      {projects.map((project, idx) => (
        <div key={project.slug} className={idx > 0 ? "mt-4" : ""}>
          <div className="flex items-center gap-6">
            <Link
              href={`/project/${project.slug}`}
              className="cursor-pointer text-red-400 hover:underline"
            >
              {project.project}
            </Link>
            <div className="flex items-center gap-2">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
                >
                  <Avatar className="h-4 w-4">
                    <AvatarImage
                      src={"https://cdn.simpleicons.org/github/f5f5f5"}
                    />
                  </Avatar>
                </Link>
              )}
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
                >
                  <Globe size={18} color="#8A8AFF" />
                </Link>
              )}
            </div>
          </div>
          <div className="mt-2">
            <ul className="mt-2 list-inside list-disc text-sm sm:text-base">
              {project.description.map((desc, descIdx) => (
                <li key={descIdx}>{desc}</li>
              ))}
            </ul>
            <div className="text-muted-foreground my-2 flex flex-wrap items-center gap-2 text-sm">
              {project.stack.map((tech) => (
                <Button
                  key={tech.name}
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs sm:text-sm"
                >
                  <Avatar className="h-3 w-3 sm:h-4 sm:w-4">
                    <AvatarImage src={tech.icon} alt={tech.name} />
                  </Avatar>
                  {tech.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
