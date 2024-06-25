/*
  Warnings:

  - You are about to drop the `PropertyType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `propertyType` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PropertyType";
PRAGMA foreign_keys=on;

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
    "rentPrice" REAL,
    "propertyType" TEXT NOT NULL
);
INSERT INTO "new_Property" ("bathrooms", "bedrooms", "description", "excerpt", "id", "isForRent", "isForSale", "location", "lotSize", "name", "paymentDuration", "rentPrice", "salePrice", "squareFeet", "state") SELECT "bathrooms", "bedrooms", "description", "excerpt", "id", "isForRent", "isForSale", "location", "lotSize", "name", "paymentDuration", "rentPrice", "salePrice", "squareFeet", "state" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_key_check("Property");
PRAGMA foreign_keys=ON;
