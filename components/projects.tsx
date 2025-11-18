import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Projects() {
  return (
    <div>
      <div className="mx-auto mt-4 max-w-4xl px-4">
        <div className="flex items-center justify-between">
          <h1 className="hover hover:text-primary text-lg font-medium transition-all md:text-xl">
            + Projects
          </h1>
          <Link
            href="/projects"
            className="hover:text-primary group flex items-center gap-2 text-sm transition-all md:text-base"
          >
            All Projects
            <ArrowUpRight
              size={20}
              className="transition-all group-hover:mb-1"
            />
          </Link>
        </div>
        <Carousel className="mt-4">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle className="hover:text-primary/90 transition-all md:text-lg">
                    Real-time Chat Application
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground -mt-4 text-sm md:text-base">
                    Built a real-time chat application using React.js, Node.js,
                    and WebSockets. Implemented features such as user
                    authentication, chat rooms.
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
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle className="hover:text-primary/90 transition-all md:text-lg">
                    Fullstack Blogging Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground -mt-4 text-sm md:text-base">
                    Built a fullstack blogging platform using React.js, Node.js,
                    and MongoDB. Implemented features such as user
                    authentication, blog post creation, and comment system.
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
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle className="hover:text-primary/90 text-lg transition-all">
                    Backend API for Social Media.
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground -mt-4 text-sm md:text-base">
                    Built a backend API using Node.js, Express.js, and MongoDB.
                    Implemented features such as user authentication, data
                    retrieval, and data manipulation.
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
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
