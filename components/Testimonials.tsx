"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Marquee from "./magicui/marquee";

const testimonials = [
  {
    image: "https://i.pravatar.cc/150?img=49",
    name: "Sarah Johnson",
    fallback: "SJ",
    userName: "@sarah_j",
    comment:
      "PayRent has revolutionized the way I approach housing. The platform is user-friendly and incredibly efficient, making the entire process of finding and securing a rental property a breeze.",
  },
  {
    image: "https://i.pravatar.cc/150?img=33",
    name: "Michael Thompson",
    fallback: "MT",
    userName: "@mike_thompson",
    comment:
      "As a first-time homebuyer, I was overwhelmed by the process. PayRent's comprehensive resources and expert guidance made the journey seamless. Their transparency and attention to detail truly set them apart.",
  },
  {
    image: "https://i.pravatar.cc/150?img=22",
    name: "Emily Davis",
    fallback: "ED",
    userName: "@emily_davis",
    comment:
      "Listing my property on PayRent was a game-changer. Their platform connected me with reliable tenants quickly, and the streamlined management tools made it effortless to oversee my investment.",
  },
  {
    image: "https://i.pravatar.cc/150?img=51",
    name: "David Wilson",
    fallback: "DJ",
    userName: "@david_wilson",
    comment:
      "I can't recommend PayRent enough. Their commitment to exceptional service and innovative solutions has made navigating the real estate market a truly enjoyable experience.",
  },
  {
    image: "https://i.pravatar.cc/150?img=36",
    name: "Sophia Martinez",
    fallback: "SM",
    userName: "@sophia_martinez",
    comment:
      "PayRent's platform is intuitive and user-friendly. As a first-time landlord, their resources and support have been invaluable in managing my rental property efficiently.",
  },
  {
    image: "https://i.pravatar.cc/150?img=45",
    name: "Liam Johnson",
    fallback: "LJ",
    userName: "@liam_johnson",
    comment:
      "Switching to PayRent was the best decision I made for my rental business. The tenant screening process is thorough, and their automated rent collection has saved me so much time.",
  },
  {
    image: "https://i.pravatar.cc/150?img=30",
    name: "Ava Brown",
    fallback: "AB",
    userName: "@ava_brown",
    comment:
      "PayRent has revolutionized how I manage my properties. The seamless integration of all the necessary tools in one platform has made it easier than ever to keep track of everything.",
  },
  {
    image: "https://i.pravatar.cc/150?img=27",
    name: "Mason Davis",
    fallback: "MD",
    userName: "@mason_davis",
    comment:
      "The support team at PayRent is outstanding. They are always ready to assist and provide solutions to any issues I encounter. Highly recommend their services!",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const TestimonialCard = ({
  image,
  name,
  fallback,
  userName,
  comment,
}: {
  image: string;
  name: string;
  fallback: string;
  userName: string;
  comment: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4", // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage alt={userName} src={image} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{userName}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{comment}</blockquote>
    </figure>
  );
};
export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Us.
      </h2>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <TestimonialCard key={review.userName} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <TestimonialCard key={review.userName} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};
