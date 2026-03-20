"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skills = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "TRPC",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/trpc.svg",
  },
  {
    name: "Bun",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/bun.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Drizzle ORM",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/drizzle.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/vercel.svg",
  },
  {
    name: "Hono",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hono.svg",
  },
  {
    name: "Shadcn UI",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shadcnui.svg",
  },
];

export default function Skills() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Skills</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tech stack</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Button key={skill.name} variant="secondary">
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                width={14}
                height={14}
                className="mr-2"
                unoptimized
              />
              {skill.name}
            </Button>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
