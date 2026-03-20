import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex flex-col items-center justify-center py-16">
      <h2 className="mb-4 text-2xl font-semibold">Project Not Found</h2>
      <p className="text-muted-foreground mb-8 text-center">
        The project you are looking for does not exist.
      </p>
      <Link
        href="/projects"
        className="text-primary hover:text-primary/80 transition-colors"
      >
        Back to projects
      </Link>
    </div>
  );
}
