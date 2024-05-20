"use client";

import {Button} from "@/components/ui/button";
import {CheckIcon} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import {Badge} from "./ui/badge";
import Link from "next/link";

export default function SaveVest() {
  return (
    <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          SaveVest
          <Badge variant="secondary" className="text-sm text-primary">
            Most Popular
          </Badge>
        </CardTitle>
        <CardDescription>Our rent to own feature</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">
          <Link href="/packages">More Details</Link>
        </Button>
      </CardContent>
      <hr className="w-4/5 m-auto mb-4" />
      <CardFooter className="flex">
        <div className="space-y-4">
          {[
            "Flexible payment options",
            "Pay rent with an interest",
            "Own your own property in 10 years",
            "Includes property management",
          ].map((feature) => (
            <span key={feature} className="flex">
              <CheckIcon className="text-primary-500" />
              <h3 className="ml-2">{feature}</h3>
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
