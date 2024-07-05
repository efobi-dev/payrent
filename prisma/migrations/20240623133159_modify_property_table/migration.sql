/*
  Warnings:

  - Added the required column `excerpt` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lotSize` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `squareFeet` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "PropertyType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "propertyId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    CONSTRAINT "PropertyType_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "paymentDuration" TEXT,
    "isForSale" BOOLEAN NOT NULL DEFAULT false,
    "isForRent" BOOLEAN NOT NULL DEFAULT false,
    "salePrice" REAL,
    "rentPrice" REAL
);
INSERT INTO "new_Property" ("bathrooms", "bedrooms", "description", "id", "isForRent", "isForSale", "location", "name", "paymentDuration", "rentPrice", "salePrice", "state") SELECT "bathrooms", "bedrooms", "description", "id", "isForRent", "isForSale", "location", "name", "paymentDuration", "rentPrice", "salePrice", "state" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_key_check("Property");
PRAGMA foreign_keys=ON;
