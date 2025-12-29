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
    slug: "voxforge",
    project: "VoxForge AI",
    description: [
      "Designed a real-time collaborative document editor with AI-assisted writing and version insights using Next.js and WebSockets.",
      "Implemented FastAPI microservices for authentication, semantic search, and autosave pipelines with Redis-based caching improving response latency by 64%.",
    ],
    stack: [
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.simpleicons.org/fastapi",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/#4169E1",
      },
      {
        name: "Redis",
        icon: "https://cdn.simpleicons.org/redis",
      },
      {
        name: "Socket",
        icon: "https://cdn.simpleicons.org/socketdotio/ffffff",
      },
      {
        name: "Docker",
        icon: "https://cdn.simpleicons.org/docker",
      },
    ],
    github: "https://github.com/iampandit-in/voxforge-ai",
    website: "https://voxforge.ai",
  },
  {
    slug: "nebulapay",
    project: "NebulaPay",
    description: [
      "Built a production-grade payments and subscription platform supporting role-based access, multi-tenant architecture, and webhook billing events.",
      "Implemented distributed event-driven architecture using Kafka to process asynchronous transactions and fraud detection alerts.",
    ],
    stack: [
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs",
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb",
      },
      {
        name: "JWT",
        icon: "https://cdn.simpleicons.org/jwt",
      },
      {
        name: "Kafka",
        icon: "https://cdn.simpleicons.org/apachekafka",
      },
    ],
    github: "https://github.com/iampandit-in/nebulapay",
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
    github: "https://github.com/iampandit-in/skysentry-monitor",
    website: "https://skysentry.ai",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

