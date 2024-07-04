"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Unlock
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Seamless{" "}
            </span>
            Living
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Discover our innovative housing platform, where renting, owning, or
            investing in properties becomes a seamless and empowering
            experience.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">
            <Link
              href="https://web.payrentng.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Get Started
            </Link>
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            <Link href="mailto:sales@payrentng.com">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
