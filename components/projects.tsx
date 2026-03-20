"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/utils/projects";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GlobeIcon } from "@phosphor-icons/react";
import { Badge } from "./ui/badge";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Projects</h2>
      {projects.map((project) => (
        <Card key={project.slug}>
          <CardHeader>
            <CardTitle className="text-base">
              <Link href={`/project/${project.slug}`}>{project.project}</Link>
            </CardTitle>
            <CardDescription className="flex items-center gap-3">
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              )}
              {project.website && (
                <Link
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <GlobeIcon size={14} />
                  Live
                </Link>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-inside list-disc space-y-1 text-sm">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge
                  key={tech.name}
                  variant="secondary"
                  className="inline-flex items-center"
                >
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    width={14}
                    height={14}
                    className="mr-2"
                    unoptimized
                  />
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
