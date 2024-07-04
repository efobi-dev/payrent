"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Packages() {
  return (
    <section className="w-full py-12 md:ppy-24 lg:py-32">
      <div className="container grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            className="h-full w-full object-cover"
            src="https://drive.google.com/file/d/1hOyaSIGXZ8UJpjrgesVUYAzn4dvyYQAw/preview"
            width="640"
            height="480"
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover our Packages
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore our wide range of packages designed to meet your needs.
              From basic to enterprise-level solutions, we&apos;ve got you
              covered.
            </p>
          </div>
          <Button
            className="flex items-center justify-center space-x-1"
            size={"lg"}
          >
            <Link
              href="https://web.payrentng.com"
              target="_blank"
              rel="noreferrer noopener"
              className="font-bold text-xl"
            >
              Join us
            </Link>
            <SquareArrowOutUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
