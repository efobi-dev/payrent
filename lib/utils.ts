import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

export function validateRentalPlan(
  plan: string
): "Monthly" | "Bi-monthly" | "Quarterly" | "Yearly" {
  const validPlans = ["Monthly", "Bi-monthly", "Quarterly", "Yearly"];
  if (validPlans.includes(plan)) {
    return plan as "Monthly" | "Bi-monthly" | "Quarterly" | "Yearly";
  }
  console.warn(`Invalid  rental plan: ${plan}. Defaulting to Monthly`);
  return "Monthly";
}

export function validateSalePlan(
  plan: string
): "Monthly" | "Bi-monthly" | "Quarterly" | "Once" {
  const validPlans = ["Monthly", "Bi-monthly", "Quarterly", "Once"];
  if (validPlans.includes(plan)) {
    return plan as "Monthly" | "Bi-monthly" | "Quarterly" | "Once";
  }
  console.warn(`Invalid sale plan: ${plan}. Defaulting to Once`);
  return "Once";
}
