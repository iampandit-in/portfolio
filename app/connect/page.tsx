import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function Connect() {
  return (
    <div className="mx-auto mt-28 max-w-4xl p-4">
      <h1 className="text-center text-xl font-medium">Contact Me</h1>
      <div className="mx-auto mt-6 max-w-md">
        <Input placeholder="Enter Your name" />
        <Input className="mt-2" placeholder="Enter Your email" />
        <Textarea className="mt-2" placeholder="Enter Your Message" />
        <Button className="mt-2 w-full cursor-pointer">Send</Button>
      </div>
    </div>
  );
}
