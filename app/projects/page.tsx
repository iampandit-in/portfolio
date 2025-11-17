import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="mx-auto mt-20 max-w-4xl p-4">
      <h1 className="text-lg md:text-xl">All Projects</h1>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary/90 md:text-lg">
              Real-time Chat Application
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-4 text-sm md:text-base">
              Built a real-time chat application using React.js, Node.js, and
              WebSockets. Implemented features such as user authentication, chat
              rooms.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex -space-x-2">
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/nextjs.png"
                  alt="@shadcn"
                  className="rounded-full p-0"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/react.png"
                  alt="@maxleiter"
                  className="rounded-full p-0"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/tailwindcss.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary/90 md:text-lg">
              Fullstack Blogging Platform
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-4 text-sm md:text-base">
              Built a fullstack blogging platform using React.js, Node.js, and
              MongoDB. Implemented features such as user authentication, blog
              post creation, and comment system.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex -space-x-2">
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/nextjs.png"
                  alt="@shadcn"
                  className="rounded-full p-0"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/react.png"
                  alt="@maxleiter"
                  className="rounded-full p-0"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/tailwindcss.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-primary/90 md:text-lg">
              Backend API for Social Media.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground -mt-4 text-sm md:text-base">
              Built a backend API using Node.js, Express.js, and MongoDB.
              Implemented features such as user authentication, data retrieval,
              and data manipulation.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex -space-x-2">
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/nextjs.png"
                  alt="@shadcn"
                  className="rounded-full p-0"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/react.png"
                  alt="@maxleiter"
                  className="rounded-full p-0"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-6 w-6 border">
                <AvatarImage
                  src="https://github.com/tailwindcss.png"
                  alt="@evilrabbit"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
