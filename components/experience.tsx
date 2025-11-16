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
    <div className="mt-6">
      <h1 className="hover hover:text-primary text-xl font-bold transition-all">
        + Experience
      </h1>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Bajaj Auto Limited</CardTitle>
          <CardDescription>2022 - Present</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement by 15%.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Wise mango Llmited</CardTitle>
          <CardDescription>2022 - Present</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Developed and maintained web applications using React.js and
              Node.js, improving user engagement by 15%.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
