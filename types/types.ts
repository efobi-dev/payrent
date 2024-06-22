import { z } from "zod";

export interface Invoice {
  id: number;
  userId: string;
  subscriptionId: number;
  amount: number;
  date: Date;
  status: string;
}

export interface Loan {
  id: number;
  propertyId: string;
  userId: string;
  loanAmount: number;
  interestRate: number;
  startDate: Date;
  endDate: Date;
}

export interface Properties {
  id: string;
  images: string[];
  price: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  location: string;
  state: string;
  paymentDuration: string;
  isForSale: boolean;
  isForRent: boolean;
  isLikedByCurrentUser: boolean;
  salePrice: number;
  rentPrice: number;
  Loan: Loan[];
  Rental: Rental[];
  Sale: Sale[];
  Like: Like[];
}

export interface Rental {
  id: number;
  propertyId: number;
  userId: string;
  startDate: Date;
  endDate: Date;
  rentAmount: number;
}

export interface Sale {
  id: number;
  propertyId: number;
  buyerId: string;
  sellerId: string;
  salePrice: number;
  saleDate: Date;
}

export interface Subscription {
  id: number;
  userId: string;
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
  Like: Like[];
}

export interface Like {
  id: number;
  userId: string;
  propertyId: number;
  createdAt: Date;
}
