/*
  Warnings:

  - Changed the type of `priority` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
ALTER TYPE "Priority" ADD VALUE 'NOTGIVEN';

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "priority",
ADD COLUMN     "priority" TEXT NOT NULL;
