/*
  Warnings:

  - You are about to drop the column `photo` on the `vehicles` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "vehicles" DROP COLUMN "photo",
ADD COLUMN     "photo_url" TEXT;
