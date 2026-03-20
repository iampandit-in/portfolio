type TechStack = {
  name: string;
  icon: string;
};

type Project = {
  slug: string;
  project: string;
  description: string[];
  stack: TechStack[];
  github?: string;
  website?: string;
};

export const projects: Project[] = [
  {
    slug: "shadospace",
    project: "Shadospace",
    description: [
      "Shadospace is a simple blog platform for developers to share their thoughts and ideas.",
      "Implemented authentication, CRUD operations, and a responsive UI using Next.js, Tailwind CSS, and Shadcn UI.",
    ],
    stack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Better Auth",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/betterauth.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
        name: "Shadcn UI",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shadcnui.svg",
      },
    ],
    website: "https://shadospace.in",
  },
  {
    slug: "shado-auth",
    project: "Shado Auth",
    description: [
      "Shado Auth is a simple authentication system for developers to authenticate their users.",
      "Implemented robust and scalable authentication with Better Auth, and a responsive UI using Next.js, Tailwind CSS, and Shadcn UI.",
    ],
    stack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
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
        name: "Better Auth",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/betterauth.svg",
      },
      {
        name: "Shadcn UI",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shadcnui.svg",
      },
    ],
  },
  {
    slug: "rooms",
    project: "Rooms (in progress)",
    description: [
      "Rooms is a room booking application for students.",
      "Implemented robust authentication with my own Shado Auth template.",
    ],
    stack: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TRPC",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/trpc.svg",
      },
      {
        name: "Hono",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hono.svg",
      },
      {
        name: "Bun",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/bun.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Drizzle ORM",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/drizzle.svg",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getAllProjects = (): Project[] => {
  return projects;
};
