"use client";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Page() {
  return (
    <div className="flex flex-col min-h-dvh bg-gradient-to-br from-[#6336f1] to-[#8b5cf6] text-gray-50">
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 lg:py-32 gap-8">
        <div className="max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Something amazing is coming soon
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Sign up now to be the first to know when we launch
          </p>
        </div>
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-center gap-4">
            <div className="bg-gray-50 bg-opacity-10 rounded-lg px-4 py-2 text-center">
              <div className="text-4xl font-bold">14</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-gray-50 bg-opacity-10 rounded-lg px-4 py-2 text-center">
              <div className="text-4xl font-bold">08</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-gray-50 bg-opacity-10 rounded-lg px-4 py-2 text-center">
              <div className="text-4xl font-bold">42</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-gray-50 bg-opacity-10 rounded-lg px-4 py-2 text-center">
              <div className="text-4xl font-bold">18</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
 ``