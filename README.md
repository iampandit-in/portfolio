## My Portfolio

A modern, responsive portfolio website built with Next.js, showcasing projects, blog posts, and professional experience. Features dynamic routing, MDX blog support, and a clean, minimalist design.

## ✨ Features

- **Dynamic Blog System**: MDX-based blog posts with frontmatter metadata and dynamic routing
- **Project Showcase**: Detailed project pages with tech stack, descriptions, and links
- **Dark Mode**: Theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Dynamic metadata generation for all pages
- **Performance**: Static site generation with Next.js App Router
- **Type Safety**: Full TypeScript support throughout the codebase

## 🛠️ Tech Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **next-themes** - Theme management
- **Icons/Logos** - simpleicons cdn

### Content
- **MDX** - Markdown with JSX support
- **next-mdx-remote** - MDX rendering
- **gray-matter** - Frontmatter parsing

### Analytics & Deployment
- **Vercel Analytics** - Web analytics
- **Vercel** - Hosting platform

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog routes
│   │   ├── [slug]/       # Dynamic blog post pages
│   │   └── page.tsx      # Blog listing page
│   ├── project/          # Project routes
│   │   └── [slug]/       # Dynamic project pages
│   ├── projects/          # Projects listing page
│   ├── data/             # MDX blog post files
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── blog.tsx          # Blog listing component
│   ├── projects.tsx      # Projects component
│   ├── skills.tsx        # Skills component
│   └── header.tsx        # Navigation header
├── utils/                # Utility functions
│   ├── mdx.ts           # MDX processing utilities
│   └── projects.ts      # Project data management
├── lib/                  # Library utilities
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iampandit-in/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Content

### Adding a Blog Post

1. Create a new `.mdx` file in `app/data/`:
```mdx
---
title: "Your Blog Post Title"
author: "Your Name"
description: "A brief description of your post"
date: 2025-01-01
tags: ["tag1", "tag2"]
---

Your blog content here...
```

2. The blog post will automatically appear in the blog listing and be accessible at `/blog/your-slug`.

### Adding a Project

1. Edit `utils/projects.ts` and add your project to the `projects` array:
```typescript
{
  slug: "your-project-slug",
  project: "Project Name",
  description: [
    "First description point",
    "Second description point"
  ],
  stack: [
    { name: "Technology", icon: "icon-url" }
  ],
  github: "https://github.com/...",
  website: "https://..."
}
```

2. The project will appear on the projects page and be accessible at `/project/your-project-slug`.

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

```bash
npm start
```

Starts the production server on [http://localhost:3000](http://localhost:3000).

## 🧪 Development

### Code Quality

- **ESLint**: Code linting with Next.js config
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Static type checking

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Theme Colors

Edit `app/globals.css` to customize color scheme and theme variables.

### Styling

The project uses Tailwind CSS. Customize styles in:
- `app/globals.css` - Global styles and CSS variables
- Component files - Component-specific styles

### Components

Components are located in `components/` directory. Modify or extend them as needed.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Pandit Pawar**
- Portfolio: [iampandit.in](https://iampandit.in)
- GitHub: [@iampandit-in](https://github.com/iampandit-in)
- Email: iampandit.in@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - The React Framework
- [Tailwind CSS](https://tailwindcss.com) - A utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - Beautifully designed components
- [Vercel](https://vercel.com) - Hosting and deployment platform

---

Built with ❤️ using Next.js and TypeScript by Pandit
