import { prisma } from "@/lib/utils";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const propertyId = searchParams.get("propertyId");

  if (!propertyId) {
    return new Response("Invalid Property Id", { status: 400 });
  }

  try {
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: {
        images: true,
        Loan: true,
        Rental: true,
        Sale: true,
        Like: true,
      },
    });

    if (!property) {
      return new Response("Property Not Found", { status: 400 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
}
