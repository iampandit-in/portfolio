import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";

export default function Experience() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="hover hover:text-primary text-lg font-medium transition-all md:text-xl">
          + Experience
        </h1>
        <Card className="mt-4">
          <CardHeader>
            <p className="md:text-lg">Diploma Trainee Engineer</p>
            <div className="flex items-center gap-4">
              <Link
                href={"https://www.bajajauto.com/"}
                target="_blank"
                className="hover:text-primary/90 transition-all"
              >
                Bajaj Auto Limited
              </Link>
              <p className="text-muted-foreground text-sm">
                (Apprentice) Sep 2025 - Present
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-4 text-sm md:text-base">
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement by 15%.
            </p>
          </CardContent>
        </Card>
        <Card className="mt-2">
          <CardHeader>
            <p className="md:text-lg">Full Stack Developer</p>
            <div className="flex items-center gap-4">
              <Link
                href={"https://wisemango.io/"}
                target="_blank"
                className="hover:text-primary/90 transition-all"
              >
                Wise Mango Limited
              </Link>
              <p className="text-muted-foreground text-sm">
                (Internship) Nov 2025 - Dec 2025
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-4 text-sm md:text-base">
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
