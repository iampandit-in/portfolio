import Projects from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <section className="section-shell">
        <h1 className="text-2xl font-semibold sm:text-3xl">Projects</h1>
        <p className="text-muted-foreground mt-2 text-sm sm:text-base">
          A focused set of systems and product builds across backend, realtime,
          and platform engineering.
        </p>
      </section>
      <Projects />
    </div>
  );
}
