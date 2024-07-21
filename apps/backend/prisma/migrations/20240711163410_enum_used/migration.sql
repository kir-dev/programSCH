/*
  Warnings:

  - The `priority` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "priority",
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'NOTGIVEN';
