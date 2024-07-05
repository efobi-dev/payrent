import { prisma } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);
    const query = searchParams.get("q") || "";
    const userId = searchParams.get("userId");

    const whereClause = query
      ? {
          OR: [
            { name: { contains: query } },
            { excerpt: { contains: query } },
            { propertyType: { contains: query } },
            { description: { contains: query } },
            { location: { contains: query } },
            { state: { contains: query } },
          ],
        }
      : {};

    const properties = await prisma.property.findMany({
      where: whereClause,
      include: {
        images: true,
        Loan: true,
        Rental: true,
        Sale: true,
        Like: true,
      },
      take: limit,
      skip: offset,
    });

    const totalCount = await prisma.property.count({ where: whereClause });

    if (properties.length === 0) {
      return new Response("No properties found", { status: 404 });
    }

    const propertiesWithUserLikes = await Promise.all(
      properties.map(async (property) => {
        var isLikedByCurrentUser: boolean = false;

        if (userId) {
          const like = await prisma.like.findFirst({
            where: {
              propertyId: property.id,
              userId: userId,
            },
          });
          isLikedByCurrentUser = !!like;
        }
        return {
          ...property,
          isLikedByCurrentUser,
        };
      })
    );

    return NextResponse.json(
      {
        properties: propertiesWithUserLikes,
        pagination: {
          total: totalCount,
          limit,
          offset,
          remaining: Math.max(totalCount - (offset + limit), 0),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching properties:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
