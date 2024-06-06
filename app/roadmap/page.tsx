import Roadmap from "@/components/Roadmap";
import { Metadata } from "next";
import { Suspense } from "react";

export default function Page() {
  return (
    <main>
      <Suspense>
        <Roadmap />
      </Suspense>
    </main>
  );
}
