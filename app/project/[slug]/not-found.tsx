import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Not Found</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <p className="text-muted-foreground mb-3">
          The project you are looking for does not exist.
        </p>
        <Link href="/projects">Back to projects</Link>
      </CardContent>
    </Card>
  );
}
