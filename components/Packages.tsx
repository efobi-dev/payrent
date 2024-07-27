"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import PulsatingButton from "./magicui/pulse-button";

export default function Packages() {
  return (
    <section className="w-full bg-muted/50 py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Our Packages
          </h2>
          <p className="text-lg md:text-xl">
            Explore our wide range of packages designed to meet your needs. From
            basic to enterprise-level solutions, we&apos;ve got you covered.
          </p>
          <div className="flex items-center justify-center">
            <PulsatingButton
              pulseColor="#FFD700"
              className="bg-primary items-center justify-center"
            >
              <Link
                href="https://web.payrentng.com/sign-in"
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-xl mr-2"
              >
                EXPLORE MORE
              </Link>
              <SquareArrowOutUpRight className="inline" />
            </PulsatingButton>
          </div>
        </div>
      </div>
    </section>
  );
}
