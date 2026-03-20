import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Experience() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Experience</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Diploma Trainee Engineer</CardTitle>
          <CardDescription className="text-sm">
            Bajaj Auto Limited | Sep 2025 - Present
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <ul className="list-inside list-disc">
            <li>
              Support day-to-day operations in high-volume manufacturing
              workflows.
            </li>
            <li>
              Assist inspection, quality checks, and documentation aligned with
              standard procedures.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
