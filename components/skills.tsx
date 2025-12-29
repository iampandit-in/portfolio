import Image from "next/image";
import { Button } from "./ui/button";

export default function Skills() {
  const Stack = [
    // Frontend
    { name: "Next", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
    { name: "Typescript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "Javascript", icon: "https://cdn.simpleicons.org/javascript" },

    { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },

    // Backend
    { name: "Node", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },

    // Databases
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },

    // Auth & Backend Tools
    { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/ff5555" },
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },

    // Version Control & Dev Tools
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
    { name: "Shadcn UI", icon: "https://cdn.simpleicons.org/shadcnui/ffffff" },
    { name: "Ant Design", icon: "https://cdn.simpleicons.org/antdesign" },
    { name: "Bun", icon: "https://cdn.simpleicons.org/bun/ffffff" },

    // Deployment
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  ];

  return (
    <section className="mt-6">
      <p className="text-lg sm:text-xl">+ Tech stack</p>
      <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5">
        {Stack.map((s) => (
          <Button key={s.name} variant="outline" className="p-5">
            <Image
              unoptimized
              src={s.icon}
              alt={s.name}
              width={18}
              height={18}
              className="sm:h-5 sm:w-5"
            />
            <span className="hidden text-center text-sm leading-tight sm:flex">
              {s.name}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
}
