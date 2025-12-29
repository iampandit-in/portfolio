import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h2 className="mb-4 text-2xl font-bold">Project Not Found</h2>
      <p className="text-muted-foreground mb-8">
        The project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/projects"
        className="text-red-400 transition-colors hover:text-red-500"
      >
        ← Back to projects
      </Link>
    </div>
  );
}
