"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    image: "https://i.pravatar.cc/150?img=49",
    name: "Sarah Johnson",
    userName: "@sarah_j",
    comment:
      "PayRent has revolutionized the way I approach housing. The platform is user-friendly and incredibly efficient, making the entire process of finding and securing a rental property a breeze.",
  },
  {
    image: "https://i.pravatar.cc/150?img=33",
    name: "Michael Thompson",
    userName: "@mike_thompson",
    comment:
      "As a first-time homebuyer, I was overwhelmed by the process. PayRent's comprehensive resources and expert guidance made the journey seamless. Their transparency and attention to detail truly set them apart.",
  },
  {
    image: "https://i.pravatar.cc/150?img=22",
    name: "Emily Davis",
    userName: "@emily_davis",
    comment:
      "Listing my property on PayRent was a game-changer. Their platform connected me with reliable tenants quickly, and the streamlined management tools made it effortless to oversee my investment.",
  },
  {
    image: "https://i.pravatar.cc/150?img=51",
    name: "David Wilson",
    userName: "@david_wilson",
    comment:
      "I can't recommend PayRent enough. Their commitment to exceptional service and innovative solutions has made navigating the real estate market a truly enjoyable experience.",
  },
];

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

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Read reviews from our customers and partners.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(({ image, name, userName, comment }) => (
          <Card
            key={userName}
            className="max-w-md md:break-inside-avoid overflow-hidden"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar>
                <AvatarImage alt="" src={image} />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{userName}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>{comment}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
