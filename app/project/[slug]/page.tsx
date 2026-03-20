import { getProjectBySlug, getAllProjects } from "@/utils/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{project.project}</CardTitle>
          <CardDescription className="flex items-center gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            )}
            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
              </Link>
            )}
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-inside list-disc space-y-1 text-sm">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech.name} variant="secondary">
              {tech.name}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
