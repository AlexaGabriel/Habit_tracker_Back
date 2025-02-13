/*
  Warnings:

  - You are about to drop the column `habitId` on the `Category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[catId]` on the table `Habit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `catId` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_habitId_fkey";

-- DropIndex
DROP INDEX "Category_habitId_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "habitId";

-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "catId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Habit_catId_key" ON "Habit"("catId");

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_catId_fkey" FOREIGN KEY ("catId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
