import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Projects() {
  return (
    <div className="mt-6 px-4">
      <h1 className="hover hover:text-primary text-xl font-bold transition-all">
        + Projects
      </h1>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Real-time Chat Application</CardTitle>
          <CardDescription>
            Built a real-time chat application using React.js, Node.js, and
            WebSockets. Implemented features such as user authentication, chat
            rooms, and real-time messaging.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Implemented React Hooks for state management and React Context API
              for global state management.
            </li>
            <li>Developed RESTful APIs using Node.js and Express.js.</li>
            <li>
              Utilized WebSockets for real-time communication between clients
              and server.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Fullstack Blogging Platform</CardTitle>
          <CardDescription>
            Built a fullstack blogging platform using React.js, Node.js, and
            MongoDB. Implemented features such as user authentication, blog post
            creation, and comment system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Implemented React Hooks for state management and React Router for
              client-side routing.
            </li>
            <li>Developed RESTful APIs using Node.js and Express.js.</li>
            <li>
              Utilized MongoDB for database management and implemented Mongoose
              for data modeling and schema creation.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-2">
        <CardHeader>
          <CardTitle>Backend API for Social Media Platform</CardTitle>
          <CardDescription>
            Built a backend API using Node.js, Express.js, and MongoDB.
            Implemented features such as user authentication, data retrieval,
            and data manipulation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Implemented Node.js and Express.js for building RESTful APIs.
            </li>
            <li>
              Utilized MongoDB for database management and implemented Mongoose
              for data modeling and schema creation.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
