import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Experience() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="hover hover:text-primary text-lg font-medium transition-all">
          + Experience
        </h1>
        <Card className="mt-4">
          <CardHeader>
            <div className="flex items-center gap-4">
              <p className="hover:text-primary/90">Wise Mango Limited</p>
              <p className="text-muted-foreground text-sm">
                (Internship) Nov 2025 - Dec 2025
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-4 text-sm">
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement.
            </p>
          </CardContent>
        </Card>
        <Card className="mt-2">
          <CardHeader>
            <div className="flex items-center gap-4">
              <p className="hover:text-primary/90">Bajaj Auto Limited</p>
              <p className="text-muted-foreground text-sm">
                (Apprentice) Sep 2025 - Present
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-4 text-sm">
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement by 15%.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
