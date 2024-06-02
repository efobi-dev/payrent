"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import useSWR, { mutate } from "swr";
import { fetcher } from "@/lib/utils";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "./ui/skeleton";
import { RoadmapItem } from "@/types/types";
import Image from "next/image";
import React, { useTransition } from "react";

const handleVoteUp = async (roadmapId: RoadmapItem["id"]) => {
  try {
    const response = await fetch("/api/roadmap/vote", {
      method: "POST",
      body: JSON.stringify({ roadmapId, vote: "up" }),
    });

    if (response.ok) {
      mutate("/api/roadmap/read");
    } else {
      const error = await response.json();
      console.error("Error voting up:", error);
    }
  } catch (error) {
    console.error("Error voting up:", error);
  }
};

const handleVoteDown = async (roadmapId: RoadmapItem["id"]) => {
  try {
    const response = await fetch("/api/roadmap/vote", {
      method: "POST",
      body: JSON.stringify({ roadmapId, vote: "down" }),
    });

    if (response.ok) {
      mutate("/api/roadmap/read");
    } else {
      const error = await response.json();
      console.error("Error voting down:", error);
    }
  } catch (error) {
    console.error("Error voting down:", error);
  }
};

export default function RoadmapHero() {
  const { data, isLoading } = useSWR("/api/roadmap/read", fetcher);
  const { user, isLoaded } = useUser();
  const [pending, startTransition] = useTransition();
  const [requestType, setRequestType] = useState<RoadmapItem["type"] | string>(
    "FEATURE"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      await fetch("/api/roadmap/create", {
        method: "POST",
        body: formData,
      }).then((response) => {
        if (!response.ok) {
          toast("Something went wrong", {
            description: `Error submitting your response. Please try again later`,
          });
          console.error(response);
        } else {
          toast("Response received successfully", {
            description: "Your request has been submitted and pending review",
          });
        }
      });
    });
  }

  return (
    <section className="flex-1 py-8">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Roadmap</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Raise a complaint, suggestion or feature. Or vote on existing ones
          </p>
        </div>
        {!isLoaded ? (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
            </div>
          </div>
        ) : user ? (
          <div className="flex items-center space-x-4">
            <Image
              src={user.imageUrl}
              alt={user.firstName || ""}
              className="rounded-full h-12 w-12"
            />
            <div className="space-y-2 text-pretty text-orange-400">
              {user.firstName && `Hi, ${user.firstName}`}
            </div>
          </div>
        ) : (
          <div>Error!</div>
        )}
        <div className="grid gap-6">
          {isLoading ? (
            <>
              <div className="rounded-lg shadow-sm">
                <div className="p-4 md:p-6 border-b">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
                <Skeleton className="h-4 w-[250px]" />
              </div>
              <div className="rounded-lg shadow-sm">
                <div className="p-4 md:p-6 border-b">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
                <Skeleton className="h-4 w-[250px]" />
              </div>
              <div className="rounded-lg shadow-sm">
                <div className="p-4 md:p-6 border-b">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[250px]" />
                </div>
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </>
          ) : data ? (
            data.map((item: RoadmapItem) => (
              <div className="rounded-lg shadow-sm" key={item.id}>
                <div className="p-4 md:p-6 border-b">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <div className="p-4 md:p-6 flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleVoteUp(item.id)}
                  >
                    <ArrowUpIcon className="h-5 w-5 text-green-500" />
                  </Button>
                  <span className="text-lg font-semibold">{item.votes}</span>
                  <Button variant="ghost" size="icon">
                    <ArrowDownIcon
                      className="h-5 w-5 text-red-500"
                      onClick={() => handleVoteDown(item.id)}
                    />
                  </Button>
                </div>
                <Button
                  variant="outline"
                  className={
                    item.status === "IN_PROGRESS"
                      ? "text-blue-500"
                      : item.status === "ACCEPTED" ||
                        item.status === "COMPLETED"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {item.status}
                </Button>
                <Button
                  variant="outline"
                  className={
                    item.type === "FEATURE"
                      ? "text-orange-500"
                      : item.type === "SUGGESTION"
                      ? "text-purple-500"
                      : "text-red-500"
                  }
                >
                  {item.status}
                </Button>
              </div>
            ))
          ) : (
            <div>Error!</div>
          )}
        </div>
        <div className="mt-8 rounded-lg shadow-sm p-4 md:p-6">
          <h2 className="text-lg font-semibold mb-4">
            Submit a feature request, complaint or suggestion.
          </h2>
          {isLoaded && user ? (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="space-y-1">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter a suitable title"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe with concision your request"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="request-type">Type</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Select Type</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Request Type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      id="request-type"
                      value={requestType}
                      onValueChange={setRequestType}
                      {...{ name: "request-type" }}
                    >
                      <DropdownMenuRadioItem value="FEATURE">
                        FEATURE
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="COMPLAINT">
                        COMPLAINT
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="SUGGESTION">
                        SUGGESTION
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="space-y-1">
                <Label htmlFor="user">User</Label>
                <Input id="user" name="user" value={user.id} hidden required />
              </div>
              <Button type="submit" disabled={pending}>
                {pending ? (
                  <div className="flex items-center justify-center h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent mr-3" />
                ) : (
                  <span>Submit Proposal</span>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
