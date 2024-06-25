/*
  Warnings:

  - You are about to drop the column `paymentDuration` on the `Property` table. All the data in the column will be lost.
  - Added the required column `propertyId` to the `Subscription` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subscription" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "cashbackPercentage" REAL NOT NULL,
    CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("clerkUserId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Subscription_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Subscription" ("cashbackPercentage", "endDate", "id", "plan", "startDate", "userId") SELECT "cashbackPercentage", "endDate", "id", "plan", "startDate", "userId" FROM "Subscription";
DROP TABLE "Subscription";
ALTER TABLE "new_Subscription" RENAME TO "Subscription";
CREATE TABLE "new_Property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "lotSize" REAL NOT NULL,
    "squareFeet" REAL NOT NULL,
    "isForSale" BOOLEAN NOT NULL DEFAULT false,
    "isForRent" BOOLEAN NOT NULL DEFAULT false,
    "salePrice" REAL,
    "rentPrice" REAL,
    "propertyType" TEXT NOT NULL
);
INSERT INTO "new_Property" ("bathrooms", "bedrooms", "description", "excerpt", "id", "isForRent", "isForSale", "location", "lotSize", "name", "propertyType", "rentPrice", "salePrice", "squareFeet", "state") SELECT "bathrooms", "bedrooms", "description", "excerpt", "id", "isForRent", "isForSale", "location", "lotSize", "name", "propertyType", "rentPrice", "salePrice", "squareFeet", "state" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_key_check("Subscription");
PRAGMA foreign_key_check("Property");
PRAGMA foreign_keys=ON;
