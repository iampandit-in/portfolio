import Projects from "@/components/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Selected work and product builds.
        </CardContent>
      </Card>
      <Projects />
    </div>
  );
}
