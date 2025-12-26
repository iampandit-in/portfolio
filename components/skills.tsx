import Image from "next/image";
import { Button } from "./ui/button";

export default function Skills() {
  const Stack = [
    // Frontend
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },

    // Backend
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/ffffff" },
    { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi" },

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
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },

    // Deployment
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
    { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify" },

    // Fundamentals & Platform
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
    { name: "JSON", icon: "https://cdn.simpleicons.org/json/f5f5f5" },
    { name: "HTTP", icon: "https://cdn.simpleicons.org/httpie" },
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma" },
  ];

  return (
    <section className="mt-6">
      <p className="text-lg sm:text-xl">Skills</p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
            <span className="text-center text-sm leading-tight">{s.name}</span>
          </Button>
        ))}
      </div>
    </section>
  );
}
