-- AlterEnum
ALTER TYPE "Priority" ADD VALUE 'NONE';

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "priority" SET DEFAULT 'NONE';
