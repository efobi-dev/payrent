import { z } from "zod";

export interface Invoice {
  id: string;
  userId: string;
  subscriptionId: string;
  amount: number;
  date: Date;
  status: string;
  saleId?: string | null;
  rentalId?: string | null;
}

export interface Loan {
  id: string;
  propertyId: string;
  userId: string;
  loanAmount: number;
  interestRate: number;
  startDate: Date;
  endDate: Date;
}

export interface Properties {
  id: string;
  name: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  excerpt: string;
  description: string;
  location: string;
  state: string;
  lotSize: number;
  squareFeet: number;
  propertyType: "Flat" | "Apartment" | "Condo" | "Office" | "House" | "Land";
  paymentDuration?: number | null;
  isForSale: boolean;
  isForRent: boolean;
  isLikedByCurrentUser: boolean;
  salePrice?: number | null;
  rentPrice?: number | null;
  Loan?: Loan[];
  Rental?: Rental[];
  Sale?: Sale[];
  Like: Like[];
}

export interface Rental {
  id: string;
  propertyId: string;
  userId: string;
  plan: "Monthly" | "Bi-monthly" | "Quarterly" | "Yearly";
  startDate: Date;
  endDate: Date;
  rentAmount: number;
  Invoice: Invoice[];
}

export const rentSchema = z.object({
  buyerId: z.string(),
  propertyId: z.string(),
  rentPrice: z.number(),
  rentStartDate: z.date(),
  rentEndDate: z.date(),
  plan: z.enum(["Monthly", "Bi-monthly", "Quarterly", "Yearly"]),
});

export interface Sale {
  id: string;
  propertyId: string;
  buyerId: string;
  plan: "Monthly" | "Bi-monthly" | "Quarterly" | "Once";
  salePrice: number;
  saleDate: Date;
  Invoice: Invoice[];
}

export const saleSchema = z.object({
  buyerId: z.string(),
  propertyId: z.string(),
  plan: z.enum(["Monthly", "Bi-monthly", "Quarterly", "Once"]).optional(),
  salePrice: z.number(),
  saleDate: z.date(),
});

export interface User {
  id: number;
  clerkUserId: string;
  createdAt: Date;
  email: string;
  Invoice: Invoice[];
  Loan: Loan[];
  Rental: Rental[];
  Sale_Sale_buyerIdToUser: Sale[];
  Like: Like[];
}

export interface Like {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: Date;
}
