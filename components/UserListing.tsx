"use client";

import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Properties } from "@/types/types";

export default function UserListing({
  propertyId,
}: {
  propertyId: Properties["id"];
}) {
  const { data, isLoading } = useSWR(`/api/properties/${propertyId}`, fetcher);
  return;
}
