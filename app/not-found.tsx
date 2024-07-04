import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export const runtime = "edge";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-[100dvh] px-4 mdLpx-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-8xl font-bold text-gray-900 dark:text-gray-50">
          404
        </h1>
        <p className="text-2xl font-medium text-gray-600 dark:text-gray-400">
          Looks like you&apos;ve taken a wrong turn - let us help you find your
          way back!
        </p>
        <Button size="icon" variant="link">
          <Link href="/">
            <HomeIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
