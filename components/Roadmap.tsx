"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { RoadmapItem } from "@/types/types";

const roadmap: RoadmapItem[] = [
  {
    title: "Website Redesign",
    description: "A better performant and accessible website",
    status: "IN PROGRESS",
    date: "Q1 2024",
  },
  {
    title: "PayRent Marketplace",
    description: "Access all of PayRent from the web",
    status: "IN PROGRESS",
    date: "Q1 2024",
  },
  {
    title: "Enterprise-grade Security",
    description:
      "Implement advanced security features for enterprise customers.",
    status: "PLANNED",
    date: "Q2 2024",
  },
  {
    title: "Mobile App",
    description: "Access PayRent on the go with our mobile app",
    status: "PLANNED",
    date: "Q3  2024",
  },
];
export default function Roadmap() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 mdy-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg ng-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                Roadmap
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Our Product Roadmap
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Check out our upcoming features and milestones.
              </p>
            </div>
            <div className="grid gap-6">
              {roadmap.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={
                          item.status === "COMPLETED"
                            ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                            : item.status === "IN PROGRESS"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400"
                        }
                      >
                        {item.status}
                      </Badge>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {item.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 -z-10 border-l border-gray-300 dark:border-gray-600" />
              <div className="relative flex h-[300px] w-full items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent" />
                <div className="relative flex h-[200px] w-full items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent" />
                  <div className="relative h-[150px] w-[150px] rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <div className="h-[120px] w-[120px] rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <div className="h-[90px] w-[90px] rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <div className="h-[60px] w-[60px] rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <div className="h-[30px] w-[30px] rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <div className="h-[10px] w-[10px] rounded-full bg-gray-300 dark:bg-gray-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
