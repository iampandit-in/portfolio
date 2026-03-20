import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/utils/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
    };
  }

  return {
    title: project.project,
    description: project.description.join(" "),
    openGraph: {
      title: project.project,
      description: project.description.join(" "),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.project,
      description: project.description.join(" "),
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="section-shell">
        <h1 className="text-2xl font-semibold sm:text-3xl">{project.project}</h1>
        <div className="mt-4 flex items-center gap-3">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href={project.github}
                target="_blank"
                className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
              >
                <Avatar className="h-5 w-5">
                  <AvatarImage
                    src={"https://cdn.simpleicons.org/github/f5f5f5"}
                  />
                </Avatar>
                <span>GitHub</span>
              </Link>
            </Button>
          )}
          {project.website && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href={project.website}
                target="_blank"
                className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
              >
                <Globe size={18} color="#8A8AFF" />
                <span>Website</span>
              </Link>
            </Button>
          )}
        </div>
      </section>

      <section className="section-shell">
        <h2 className="mb-3 text-xl font-semibold">About</h2>
        <ul className="list-inside list-disc space-y-2 text-sm sm:text-base">
          {project.description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </section>

      <section className="section-shell">
        <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech.name}
              className="chip inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              <Avatar className="h-3 w-3 sm:h-4 sm:w-4">
                <AvatarImage src={tech.icon} alt={tech.name} />
              </Avatar>
              {tech.name}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
