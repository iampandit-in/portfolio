import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const Stack = [
    {
      project: "VoxForge AI",
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
    },
    {
      project: "NebulaPay",
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
    },
    {
      project: "SkySentry Monitor",
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
  return (
    <section className="mt-4">
      <p className="sm:xl mb-4 text-xl">All projects</p>
      <div>
        <div className="flex items-center gap-6">
          <p className="cursor-pointer text-red-400">{Stack[0].project}</p>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/iampandit-in/voxforge-ai"
              target="_blank"
              className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
            >
              <Github size={18} />
            </Link>
            <Link
              href={"https://voxforge.ai"}
              target="_blank"
              className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
            >
              <Globe size={18} />
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <ul className="mt-2 list-inside list-disc text-sm sm:text-base">
            <li>
              Designed a real-time collaborative document editor with
              AI-assisted writing and version insights using Next.js and
              WebSockets.
            </li>
            <li>
              Implemented FastAPI microservices for authentication, semantic
              search, and autosave pipelines with Redis-based caching improving
              response latency by 64%.
            </li>
          </ul>
          <div className="text-muted-foreground my-2 flex flex-wrap items-center gap-2 text-sm">
            {Stack[0].stack.map((t) => (
              <Button
                key={t.name}
                variant="outline"
                size="sm"
                className="rounded-full text-xs sm:text-sm"
              >
                <Avatar className="h-3 w-3 sm:h-4 sm:w-4">
                  <AvatarImage src={t.icon} alt={t.name} />
                </Avatar>
                {t.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="project-2 mt-4">
        <div className="flex items-center gap-6">
          <p className="cursor-pointer text-red-400">{Stack[1].project}</p>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/iampandit-in/voxforge-ai"
              target="_blank"
              className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
            >
              <Github size={18} />
            </Link>
            <Link
              href={"https://voxforge.ai"}
              target="_blank"
              className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
            >
              <Globe size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-2">
          <ul className="mt-2 list-inside list-disc text-sm sm:text-base">
            <li>
              Built a production-grade payments and subscription platform
              supporting role-based access, multi-tenant architecture, and
              webhook billing events.
            </li>
            <li>
              Implemented distributed event-driven architecture using Kafka to
              process asynchronous transactions and fraud detection alerts.
            </li>
          </ul>
          <div className="text-muted-foreground my-2 flex flex-wrap items-center gap-2 text-sm">
            {Stack[1].stack.map((t) => (
              <Button
                key={t.name}
                variant="outline"
                size="sm"
                className="rounded-full text-xs sm:text-sm"
              >
                <Avatar className="h-3 w-3 sm:h-4 sm:w-4">
                  <AvatarImage src={t.icon} alt={t.name} />
                </Avatar>
                {t.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="project-3 mt-4">
        <div className="flex items-center gap-6">
          <p className="cursor-pointer text-red-400">{Stack[2].project}</p>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/iampandit-in/skysentry-monitor"
              target="_blank"
              className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
            >
              <Github size={18} />
            </Link>
            <Link
              href={"https://skysentry.ai"}
              target="_blank"
              className="group hover:text-primary flex items-center gap-2 text-sm transition-all duration-300"
            >
              <Globe size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-2">
          <ul className="mt-2 list-inside list-disc text-sm sm:text-base">
            <li>
              Engineered an IoT network observability dashboard capable of
              monitoring 10K+ distributed devices with live metrics and
              predictive alerts.
            </li>
            <li>
              Developed a GoLang + gRPC backend to achieve low-latency
              bidirectional communication pipelines between sensors and cloud
              cluster.
            </li>
          </ul>
          <div className="text-muted-foreground my-2 flex flex-wrap items-center gap-2 text-sm">
            {Stack[2].stack.map((t) => (
              <Button
                key={t.name}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <Avatar className="h-3 w-3 sm:h-4 sm:w-4">
                  <AvatarImage src={t.icon} alt={t.name} />
                </Avatar>
                {t.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
