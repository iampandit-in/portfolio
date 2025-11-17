import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Experience() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="hover hover:text-primary text-xl font-medium transition-all">
          + Experience
        </h1>
        <Card className="mt-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-primary/90">
                Wise Mango Limited
              </CardTitle>
              <CardDescription>Nov 2025 - Dec 2025</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-2">
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement.
            </p>
          </CardContent>
        </Card>
        <Card className="mt-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-primary/90">
                Bajaj Auto Limited
              </CardTitle>
              <CardDescription>Sep 2025 - Present</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-2">
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement by 15%.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
