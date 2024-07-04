"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";

const roadmap = [
  {
    title: "Website Redesign",
    description: "A better performant and accessible website",
    status: "IN PROGRESS",
    date: "Q1 2024",
  },
  {
    title: "PayRent Properties",
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
    </main>
  );
}
