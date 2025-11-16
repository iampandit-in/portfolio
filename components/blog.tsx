import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Blog() {
  return (
    <div className="mt-6 px-4">
      <h1 className="hover hover:text-primary text-xl font-bold transition-all">
        + Blog
      </h1>
      <div className="mt-4 grid grid-cols-1 gap-2 lg:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>
              Fullstack E-commerce Platform for Fashion Brand
            </CardTitle>
            <CardDescription>
              Built a fullstack e-commerce platform using React.js, Node.js, and
              PostgreSQL. Implemented features such as user authentication,
              shopping cart, payment gateway integration, and product search.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Implemented React Hooks for state management and React Router
                for client-side routing.
              </li>
              <li>Developed RESTful APIs using Node.js and Express.js.</li>
              <li>
                Utilized PostgreSQL for database management and implemented SQL
                queries for data retrieval.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="col-span-1">
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
                Implemented React Hooks for state management and React Context
                API for global state management.
              </li>
              <li>Developed RESTful APIs using Node.js and Express.js.</li>
              <li>
                Utilized WebSockets for real-time communication between clients
                and server.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Fullstack Blogging Platform</CardTitle>
            <CardDescription>
              Built a fullstack blogging platform using React.js, Node.js, and
              MongoDB. Implemented features such as user authentication, blog
              post creation, and comment system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Implemented React Hooks for state management and React Router
                for client-side routing.
              </li>
              <li>Developed RESTful APIs using Node.js and Express.js.</li>
              <li>
                Utilized MongoDB for database management and implemented
                Mongoose for data modeling and schema creation.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
