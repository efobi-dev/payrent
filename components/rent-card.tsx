"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Properties } from "@/types/types";

export function RentCard({ price }: { price: Properties["rentPrice"] }) {
  let securityDeposit: string | undefined;
  if (price) {
    securityDeposit = (price * 0.45 + price).toFixed(2);
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>For Rent</CardTitle>
        <CardDescription>
          This property is currently listed for rent
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Rental Price</div>
          <div className="text-4xl font-bold">{price}</div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Security Deposit</div>
          <div className="text-2xl font-bold">{securityDeposit}</div>
        </div>
        <Button size="lg" className="w-full mt-4"></Button>
      </CardContent>
      <CardFooter className="text-sm">
        Security deposit includes rent for the first month
      </CardFooter>
    </Card>
  );
}
