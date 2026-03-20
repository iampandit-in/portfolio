import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
};

const groupedSkills: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "React", icon: "https://cdn.simpleicons.org/react" },
      { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/ff5555" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
    ],
  },
  {
    title: "Data & Tools",
    skills: [
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
      { name: "Git", icon: "https://cdn.simpleicons.org/git" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="section-shell">
      <h2 className="section-title">Tech Stack</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {groupedSkills.map((group) => (
          <div key={group.title} className="bg-background/70 rounded-xl border p-4">
            <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill.name} className="chip inline-flex items-center gap-2">
                  <Image
                    unoptimized
                    src={skill.icon}
                    alt={skill.name}
                    width={14}
                    height={14}
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
