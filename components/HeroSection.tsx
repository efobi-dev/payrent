"use client";

import { Button } from "./ui/button";
import { TypedText } from "./TypedText";
import Link from "next/link";
import HeroCarousel from "./Carousel";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="text-3xl font-bold sm:text-5xl xl:text-6xl/none">
                <h1 className="inline sm:block">Experience The Ease</h1>
                <div className="block sm:inline">
                  To{""} <TypedText />
                </div>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                At Payrent, we know that shelter is an important responsibility
                for every home. Not to worry, we have worked it out for you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button>
                <Link href="https://web.payrentng.com">Become A Member</Link>
              </Button>
              <Button variant="outline">
                <Link href="/packages">Get More Information</Link>
              </Button>
            </div>
          </div>
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
