"use client";

import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { likeProperty } from "@/app/properties/action";
import { Properties } from "@/types/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LikeButton({
  propertyId,
  initialLike,
}: {
  propertyId: Properties["id"];
  initialLike: boolean;
}) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(() => initialLike);

  const handleLike = async () => {
    try {
      const result = await likeProperty(propertyId);

      if (result.error) {
        throw new Error(result.error);
      }
      setIsLiked(!isLiked);
      router.refresh();
    } catch (error) {
      if (error instanceof Error && error.message === "You must be signed in") {
        toast("You must be signed in", {
          description: "You must be signed in to interact with this",
          action: {
            label: "Sign in",
            onClick: () => router.push("/sign-up"),
          },
        });
      } else {
        toast("Something went wrong", {
          description: "Check your internet connection and try again",
        });
      }
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={handleLike}
    >
      <Heart
        className={`w-6 h-6 text-orange-500 ${
          isLiked ? "fill-orange-500" : ""
        }`}
      />
      <span className="sr-only">Favorite</span>
    </Button>
  );
}
