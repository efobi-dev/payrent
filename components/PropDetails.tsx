"use client";

import { Properties } from "@/types/types";
import { Button } from "./ui/button";
import Image from "next/image";
import { LikeButton } from "./like-button";
import { Bath, Bed, Leaf, MapPin, Option, Ruler } from "lucide-react";
import { ImageDialog } from "./image-dialog";
import { SaleCard } from "./sale-card";
import { RentCard } from "./rent-card";

export default function PropDetails({ property }: { property: Properties }) {
  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <>
        <section className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src={property.images[0]}
              alt="Property image"
              width={900}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid gap-4 md:gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl sm:text-4xl font-bold">
                {property.name}
              </h1>
              <div className="text-4xl font-bold">
                ₦
                {property.salePrice
                  ? property.salePrice.toLocaleString()
                  : property.rentPrice?.toLocaleString()}
                {property.rentPrice && (
                  <span className="text-sm font-normal">/month</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Bed className="w-5 h-5 text-primary" />
                <span>{property.bedrooms} Bedroom(s)</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-5 h-5 text-primary" />
                <span>{property.bathrooms} Bathroom(s)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5 text-primary" />
                <span>
                  {property.location}, {property.state}
                </span>
              </div>
            </div>
            <div className="text-muted-foreground">{property.description}</div>
            <div className="flex items-center gap-4">
              <Button size="lg">Schedule a Tour</Button>
              <div className="flex items-center justify-center gap-2 border-gray-700 border px-2 py-1 rounded-md">
                <LikeButton
                  propertyId={property.id}
                  initialLike={property.isLikedByCurrentUser}
                  className="inline"
                />
                <span className="inline">Save</span>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Gallery
          </h2>
          <ImageDialog images={property.images} />
        </section>
        <section className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Property Details
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="grid gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Bed className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-medium">Bedrooms</div>
                  <div className="text-muted-foreground">
                    {property.bedrooms}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-medium">Bathrooms</div>
                  <div className="text-muted-foreground">
                    {property.bathrooms}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-medium">Square Feet</div>
                  <div className="text-muted-foreground">
                    {property.squareFeet} sq ft
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Option className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-medium">Lot Size</div>
                  <div className="text-muted-foreground">
                    {property.lotSize} acres
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-medium">Lot Type</div>
                  <div className="text-muted-foreground">
                    {property.propertyType}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-2xl sm;text-3xl font-bold mb-4 sm:mb-6">
            Property Description
          </h2>
          <div className="prose max-w-none">{property.description}</div>
        </section>
        <section className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Pricing and Availability
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {property.isForSale ? (
              <SaleCard price={property.salePrice} />
            ) : property.isForRent ? (
              <RentCard price={property.rentPrice} />
            ) : (
              <div>Error!</div>
            )}
          </div>
        </section>
      </>
    </div>
  );
}
