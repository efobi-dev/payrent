"use client";

import {Button} from "./ui/button";
import HeroCards from "./HeroCards";

export default function HeroSection() {
  return (
    <section className="min-h-screen container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient"></span>
          </h1>
        </main>
      </div>
    </section>
  );
}
