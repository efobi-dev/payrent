/*
  Warnings:

  - Made the column `plan` on table `Sale` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "propertyId" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "salePrice" REAL NOT NULL,
    "saleDate" DATETIME NOT NULL,
    CONSTRAINT "Sale_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("clerkUserId") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sale" ("buyerId", "id", "plan", "propertyId", "saleDate", "salePrice") SELECT "buyerId", "id", "plan", "propertyId", "saleDate", "salePrice" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
PRAGMA foreign_key_check("Sale");
PRAGMA foreign_keys=ON;
