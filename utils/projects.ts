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
      "Implemented Authentication, CRUD operations, and a responsive UI using Next.js, Tailwind CSS, and Shadcn UI.",
    ],
    stack: [
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      },
      {
        name: "Better Auth",
        icon: "https://cdn.simpleicons.org/betterauth",
      },
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql",
      },
      {
        name: "Drizzle ORM",
        icon: "https://cdn.simpleicons.org/drizzle",
      },
      {
        name: "Shadcn UI",
        icon: "https://cdn.simpleicons.org/shadcnui/ffffff",
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
        icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql",
      },
      {
        name: "Drizzle ORM",
        icon: "https://cdn.simpleicons.org/drizzle",
      },
      {
        name: "Better Auth",
        icon: "https://cdn.simpleicons.org/betterauth",
      },
      {
        name: "Shadcn ui",
        icon: "https://cdn.simpleicons.org/shadcnui",
      },
    ],
    website: "https://nebulapay.com",
  },
  {
    slug: "skysentry",
    project: "SkySentry Monitor",
    description: [
      "Engineered an IoT network observability dashboard capable of monitoring 10K+ distributed devices with live metrics and predictive alerts.",
      "Developed a GoLang + gRPC backend to achieve low-latency bidirectional communication pipelines between sensors and cloud cluster.",
    ],
    stack: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "Golang",
        icon: "https://cdn.simpleicons.org/golang",
      },
      {
        name: "gRPC",
        icon: "https://cdn.simpleicons.org/grpc",
      },
      {
        name: "Prometheus",
        icon: "https://cdn.simpleicons.org/prometheus",
      },
      {
        name: "TimescaleDB",
        icon: "https://cdn.simpleicons.org/timescaledb",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.simpleicons.org/kubernetes",
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
