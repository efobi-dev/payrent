"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { Properties } from "@/types/types";

export async function likeProperty(propertyId: Properties["id"]) {
  try {
    const { userId } = auth();

    if (!userId) {
      return { error: "You must be signed in" };
    }

    const existingLike = await prisma.like.findFirst({
      where: {
        userId: userId,
        propertyId: propertyId,
      },
    });

    var isLiked: boolean;

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
      isLiked = false;
    } else {
      await prisma.like.create({
        data: {
          userId: userId,
          propertyId: propertyId,
        },
      });
      isLiked = true;
    }

    revalidatePath(`/properties/${propertyId}`);
    return { success: true, isLiked };
  } catch (error) {
    console.error(error);
    return { error: "Error occurred processing your request" };
  }
}
