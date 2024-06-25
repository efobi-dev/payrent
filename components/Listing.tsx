"use client";

import { LikeButton } from "./like-button";
import { PropertyCarousel } from "./prop-carousel";
import useSWR from "swr";
import { useUser } from "@clerk/nextjs";
import { fetcher } from "@/lib/utils";
import { Properties } from "@/types/types";
import { Bed, Bath, ArrowRightFromLine } from "lucide-react";
import { PropertyPagination } from "./listing-pagination";
import { SearchInput } from "./search-bar";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Listing() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const currentPage = parseInt(searchParams.get("page") || "1");
  const limit = 6;
  const offset = (currentPage - 1) * limit;
  const { user } = useUser();
  const { data, isLoading } = useSWR(
    `/api/properties?q=${searchQuery}&limit=${limit}&offset=${offset}&userId=${user?.id}`,
    fetcher
  );
  const totalPages = data ? Math.ceil(data.pagination.total / limit) : 0;
  const handlePageChange = (page: number) => {
    router.push(`/properties?q=${searchQuery}&page=${page}`);
  };
  return (
    <>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Find Your Dream Home
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Browse our selection of properties and find the perfect fit for
              you.
            </p>
            <SearchInput defaultValue={searchQuery || ""} />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-12 aspect-square flex border-4 border-transparent rounded-full border-r-[#25b09b] animate-l15">
                <div className="absolute w-full h-full border-inherit border-4 rounded-full m-1 animate-l15_2"></div>
                <div className="absolute w-full h-full border-inherit border-4 rounded-full m-2 animate-l15_3"></div>
              </div>
            </div>
          ) : data && data.properties.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.properties.map((property: Properties) => (
                  <div
                    key={property.id}
                    className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg hover:scale-105"
                  >
                    <PropertyCarousel images={property.images} />
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">
                          ₦
                          {property.salePrice
                            ? property.salePrice.toLocaleString()
                            : property.rentPrice?.toLocaleString()}
                          {property.rentPrice && (
                            <span className="text-sm font-normal">/month</span>
                          )}
                        </div>
                        <LikeButton
                          propertyId={property.id}
                          initialLike={property.isLikedByCurrentUser}
                        />
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                        <Bed className="w-5 h-5" />
                        <span>{property.bedrooms} Bedroom(s)</span>
                        <Bath className="w-5 h-5" />
                        <span>{property.bathrooms} Bathroom(s)</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 mt-4">
                        {property.excerpt}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        {property.location}, {property.state}
                      </p>
                    </div>
                    <div className="flex items-center justify-end mb-4 mr-4">
                      <Button>
                        <Link
                          href={`/properties/${property.id}`}
                          className="inline text-lg font-bold tracking-tight"
                        >
                          Details{" "}
                          <ArrowRightFromLine className="h-4 w-4 inline" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <PropertyPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center h-64">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  No properties found
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg mt-4">
                  Try adjusting your search filters to find what you&apos;re
                  looking for.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
