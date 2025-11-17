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
          <h1 className="hover hover:text-primary text-xl font-medium transition-all">
            + Projects
            <span className="text-muted-foreground ml-2 text-sm font-medium md:ml-4">
              (Swipe Left)
            </span>
          </h1>
          <Link
            href="https://github.com/iampandit-in"
            target="_blank"
            className="hover:text-primary group flex items-center gap-2 transition-all"
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
                  <CardTitle className="text-primary/90">
                    Real-time Chat Application
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground -mt-4">
                    Built a real-time chat application using React.js, Node.js,
                    and WebSockets. Implemented features such as user
                    authentication, chat rooms.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row flex-wrap items-center gap-12">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/nextjs.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/react.png"
                          alt="@maxleiter"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/tailwindcss.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/postgresql.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/mongodb.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary/90">
                    Fullstack Blogging Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground -mt-4">
                    Built a fullstack blogging platform using React.js, Node.js,
                    and MongoDB. Implemented features such as user
                    authentication, blog post creation, and comment system.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row flex-wrap items-center gap-12">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/nextjs.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/react.png"
                          alt="@maxleiter"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/tailwindcss.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/postgresql.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/mongodb.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary/90">
                    Backend API for Social Media Platform
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground -mt-4">
                    Built a backend API using Node.js, Express.js, and MongoDB.
                    Implemented features such as user authentication, data
                    retrieval, and data manipulation.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-row flex-wrap items-center gap-12">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/nextjs.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/react.png"
                          alt="@maxleiter"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/tailwindcss.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/postgresql.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/mongodb.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                    </div>
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
