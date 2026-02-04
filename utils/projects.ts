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
    slug: "momentum",
    project: "Momentum",
    description: [
      "Built a production-grade project management platform with multi-user project and task workflows.",
      "Designed REST APIs for authentication, projects, tasks, and role-based access control.",
      "Implemented secure JWT-based authentication with protected routes and authorization middleware.",
      "Structured the backend using MVC architecture with centralized error handling and validation.",
    ],
    stack: [
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb",
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express",
      },
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs",
      },
      {
        name: "JWT",
        icon: "https://cdn.simpleicons.org/jwt",
      },
    ],
  },
  {
    slug: "shadospace",
    project: "Shadospace",
    description: [
      "Developed a full-stack blogging platform supporting content creation, editing, and publishing.",
      "Architected scalable REST APIs for users, posts, comments, and engagement workflows.",
      "Implemented authentication and authorization using JWT and middleware-based access control.",
      "Designed MongoDB schemas for posts, users, tags, and relational references.",
    ],
    stack: [
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb",
      },
      {
        name: "Express.js",
        icon: "https://cdn.simpleicons.org/express",
      },
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react",
      },
      {
        name: "Node.js",
        icon: "https://cdn.simpleicons.org/nodedotjs",
      },
      {
        name: "JWT",
        icon: "https://cdn.simpleicons.org/jwt",
      },
    ],
  },
  {
    slug: "ladder",
    project: "Ladder",
    description: [
      "Built a job board platform enabling employers to post jobs and candidates to apply online.",
      "Developed a standalone backend REST API handling job listings, applications, and user roles.",
      "Implemented role-based access control for employers, candidates, and admins using JWT.",
      "Integrated a Next.js SSR frontend for SEO-friendly job pages and improved performance.",
    ],
    stack: [
      {
        name: "Next.js",
        icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      },
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
    ],
  },
  {
    slug: "instachat",
    project: "InstaChat",
    description: [
      "Designed a real-time messaging backend supporting one-to-one and group conversations.",
      "Implemented WebSocket-based message delivery using Socket.IO with JWT-secured connections.",
      "Built REST APIs for user authentication, conversations, and message history retrieval.",
      "Designed MongoDB schemas for users, conversations, messages, and delivery status.",
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
        name: "Socket.IO",
        icon: "https://cdn.simpleicons.org/socketdotio/ffffff",
      },
      {
        name: "JWT",
        icon: "https://cdn.simpleicons.org/jwt",
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
