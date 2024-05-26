"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogList = [
  {
    href: "/blog/8-money-management-tips",
    src: "/money-management.jpg",
    title: "8 Money Management Tips",
    description:
      "Learn practical strategies to take control of your finances and achieve your financial goals.",
  },
  {
    href: "/blog/best-investment-strategies",
    src: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f",
    title: "Best Investment Strategies for Beginners",
    description:
      "Discover the top investment strategies suitable for beginners looking to build wealth and secure their financial future.",
  },
  {
    href: "/blog/credit-score-importance",
    src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    title: "The Importance of a Good Credit Score",
    description:
      "Understand why maintaining a good credit score is crucial and how it can impact various aspects of your financial life.",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-white py-12 md:py-24 lg:py-32 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
              Our Blog
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-400">
              Stay up-to-date with the latest news and insights from the world
              of property.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-orange-500 hover:underline hover:underline-offset-4"
            >
              View All Posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {blogList.map((blog) => (
            <Link
              href={blog.href}
              key={blog.title}
              className="group relative overflow-hidden rounded-lg bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800"
            >
              <Image
                alt={blog.title}
                className="aspect-[3/2] w-full object-cover object-center"
                height={200}
                width={300}
                src={blog.src}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 transition-all group-hover:from-black/50">
                <div className="text-lg font-semibold text-white">
                  {blog.title}
                </div>
                <div className="text-sm text-gray-300">{blog.description}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
