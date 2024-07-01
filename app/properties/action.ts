"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { Properties } from "@/types/types";
import { validateRentalPlan, validateSalePlan } from "@/lib/utils";

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

export async function getPropertyDetails(propertyId: Properties["id"]) {
  const { userId } = auth();
  try {
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: {
        images: true,
        Loan: true,
        Rental: {
          include: {
            Invoice: true,
          },
        },
        Sale: {
          include: {
            Invoice: true,
          },
        },
        Like: true,
      },
    });

    if (!property) return null;

    const isLikedByCurrentUser = userId
      ? property.Like.some((like) => like.userId === userId)
      : false;

    const propertyData: Properties = {
      ...property,
      isLikedByCurrentUser,
      images: property.images.map((img) => img.url),
      propertyType: property.propertyType as Properties["propertyType"],
      Rental: property.Rental.map((rental) => ({
        ...rental,
        plan: validateRentalPlan(rental.plan),
      })),
      Sale: property.Sale.map((sale) => ({
        ...sale,
        plan: validateSalePlan(sale.plan),
      })),
    };
    return propertyData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
