"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const features = [
  {
    icon: "/house.png",
    title: "Rent with PayRent",
    description:
      "Streamline your rental experience with our user-friendly platform. Easily find and secure your dream rental property without the hassle.",
  },
  {
    icon: "/coin.png",
    title: "Own with PayRent",
    description:
      "Unlock the door to home ownership with our comprehensive suite of tools and resources. Find your perfect home and navigate the buying process with ease.",
  },
  {
    icon: "/profit.png",
    title: "Earn with PayRent",
    description:
      "Maximize your investment potential by listing your property with us. Our platform connects you with renters and buyers, helping you earn steady income.",
  },
];

export const Products = () => {
  return (
    <section className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Core{" "}
        </span>
        Offerings
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Discover our comprehensive housing platform - your one-stop solution for
        all residential needs. Streamline the process of renting, buying, or
        investing with our user-friendly tools and exceptional service.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                <Image src={icon} alt={title} width={50} height={50} />
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
