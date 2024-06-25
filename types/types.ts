import { z } from "zod";

export interface Invoice {
  id: string;
  userId: string;
  subscriptionId: string;
  amount: number;
  date: Date;
  status: string;
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
  paymentDuration?: Subscription[];
  isForSale: boolean;
  isForRent: boolean;
  isLikedByCurrentUser: boolean;
  salePrice?: number | null;
  rentPrice?: number | null;
  Loan: Loan[];
  Rental: Rental[];
  Sale: Sale[];
  Like: Like[];
}

export interface Rental {
  id: string;
  propertyId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  rentAmount: number;
}

export interface Sale {
  id: string;
  propertyId: string;
  buyerId: string;
  sellerId: string;
  salePrice: number;
  saleDate: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  propertyId: string;
  plan: "Monthly" | "Bi-monthly" | "Quarterly" | "Yearly";
  startDate: Date;
  endDate: Date;
  cashbackPercentage: number;
  Invoice: Invoice[];
}

export interface User {
  id: number;
  clerkUserId: string;
  createdAt: Date;
  email: string;
  Invoice: Invoice[];
  Loan: Loan[];
  Rental: Rental[];
  Sale_Sale_buyerIdToUser: Sale[];
  Sale_Sale_sellerIdToUser: Sale[];
  Subscription: Subscription[];
  Like: Like[];
}

export interface Like {
  id: string;
  userId: string;
  propertyId: string;
  createdAt: Date;
}
