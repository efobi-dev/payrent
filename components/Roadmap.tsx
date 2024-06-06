"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useSWR, { mutate } from "swr";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { roadmapSchema } from "@/types/types";
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

  const form = useForm<z.infer<typeof roadmapSchema>>({
    resolver: zodResolver(roadmapSchema),
    defaultValues: {
      type: "FEATURE",
      user: isLoaded && user ? user.id : "",
    },
  });

  async function onSubmit(values: z.infer<typeof roadmapSchema>) {
    startTransition(async () => {
      await fetch("/api/roadmap/create", {
        method: "POST",
        body: JSON.stringify(values),
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
          mutate("/api/roadmap/read");
        }
      });
    });
  }

  return (
    <section className="flex-1 py-8">
      <div className="container space-y-2 md:px-6">
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
              width={50}
              height={50}
            />
            <div className="py-2 text-pretty leading-snug tracking-wide text-xl text-orange-400">
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
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleVoteDown(item.id)}
                  >
                    <ArrowDownIcon className="h-5 w-5 text-red-500" />
                  </Button>
                </div>
                <div className="space-x-2">
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
                    {item.type}
                  </Button>
                </div>
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter a suitable title"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="flex justify-end">
                        A title for your request
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="space-y-3 w-2/3">
                      <FormLabel>My request is a...</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="FEATURE" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Feature
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="COMPLAINT" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Complaint
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="SUGGESTION" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Suggestion
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe with concision your request"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="flex justify-end">
                        The clearer the description, the quicker the approval
                        process
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <input
                  type="hidden"
                  {...form.register("user")}
                  value={user.id}
                />
                <Button type="submit" disabled={pending}>
                  {pending ? (
                    <div className="flex items-center justify-center h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent mr-3" />
                  ) : (
                    <span>Submit</span>
                  )}
                </Button>
              </form>
            </Form>
          ) : (
            <div className="space-y-1">
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
