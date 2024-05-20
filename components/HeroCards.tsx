"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {Rating} from "./rating";
import SaveVest from "./VestCard";
import SaveRent from "./RentCard";
import {PhoneIncomingIcon} from "lucide-react";

export default function HeroCards() {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/*Review */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="review" src="https://i.pravatar.cc/150?img=51" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Adedeji Balogun</CardTitle>
            <CardDescription>
              <Rating />
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>A breakthrough in the real estate market</CardContent>
      </Card>
      {/**Pricing */}
      <SaveRent />
      <SaveVest />
      {/**Contact */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <PhoneIncomingIcon />
          </div>
          <div>
            <CardTitle>Property management</CardTitle>
            <CardDescription className="text-md mt-2">
              We manage your real estate and offer site inspection services
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
