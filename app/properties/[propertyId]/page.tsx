import { Metadata } from "next";
import PropDetails from "@/components/PropDetails";
import { getPropertyDetails } from "../action";
import { Properties } from "@/types/types";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    propertyId: Properties["id"];
  };
}): Promise<Metadata> {
  const property = await getPropertyDetails(params.propertyId);
  if (!property) return notFound();

  return {
    title: `${property.name}`,
    description: `${property.excerpt}`,
    openGraph: {
      images: property.images[0],
    },
  };
}

export default async function Page({
  params,
}: {
  params: { propertyId: Properties["id"] };
}) {
  const property = await getPropertyDetails(params.propertyId);
  if (!property) {
    return notFound();
  }

  return <PropDetails property={property} />;
}
