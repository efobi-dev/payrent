import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {PrismaClient} from '@prisma/client'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const prisma = new PrismaClient()

export const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());