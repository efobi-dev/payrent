/*
  Warnings:

  - You are about to drop the `PropertyType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `country` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "PropertyType_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PropertyType";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Property" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "paymentDuration" TEXT,
    "isForSale" BOOLEAN NOT NULL DEFAULT false,
    "isForRent" BOOLEAN NOT NULL DEFAULT false,
    "salePrice" REAL,
    "rentPrice" REAL
);
INSERT INTO "new_Property" ("bathrooms", "bedrooms", "description", "id", "location", "name", "paymentDuration", "state") SELECT "bathrooms", "bedrooms", "description", "id", "location", "name", "paymentDuration", "state" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clerkUserId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("clerkUserId", "createdAt", "email", "id") SELECT "clerkUserId", "createdAt", "email", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_clerkUserId_key" ON "User"("clerkUserId");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check("Property");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
