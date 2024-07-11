import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
