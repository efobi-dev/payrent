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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Properties, Sale } from "@/types/types";
import { Separator } from "./ui/separator";
import { useState, useMemo } from "react";

export function SaleCard({ price }: { price: Properties["salePrice"] }) {
  const [plan, setPlan] = useState<Sale["plan"]>();
  const estimatedPayment = useMemo(() => {
    if (!plan || !price) return null;

    const interestRate = 0.05; //working with a 5% interest rate

    let periods;
    switch (plan) {
      case "Once":
        return price;
      case "Monthly":
        periods = 12;
        break;
      case "Bi-monthly":
        periods = 6;
        break;
      case "Quarterly":
        periods = 4;
        break;
      default:
        return null;
    }

    const monthlyRate = interestRate / 12;
    const monthlyPayment =
      (price * monthlyRate * Math.pow(1 + monthlyRate, periods)) /
      (Math.pow(1 + monthlyRate, periods) - 1);
    return (monthlyPayment * (12 / periods)).toFixed(2);
  }, [plan, price]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>For Sale</CardTitle>
        <CardDescription>
          This property is currently listed for sale.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">Listing Price</div>
          <div className="text-4xl font-bold">{price}</div>
        </div>
        <Separator className="my-4" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Select Payment Plan</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <DropdownMenuLabel>Payment Plan</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={plan}
              onValueChange={(value) => setPlan(value as Sale["plan"])}
            >
              <DropdownMenuRadioItem value="Once">
                One Time Payment
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Monthly">
                Monthly Payment
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Bi-monthly">
                Every two months
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Quarterly">
                Every four months
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground">
            Estimated {plan === undefined ? "" : `${plan}`} Payment
          </div>
          <div className="text-2xl font-bold">
            {estimatedPayment !== null ? `₦${estimatedPayment}` : "₦0"}
          </div>
        </div>
        <Button size="lg" className="w-full mt-4">
          Schedule a Tour
        </Button>
      </CardContent>
      <CardFooter className="text-sm">
        5% compound interest with amortization to be paid off over the course of
        a year after initial deposit
      </CardFooter>
    </Card>
  );
}
