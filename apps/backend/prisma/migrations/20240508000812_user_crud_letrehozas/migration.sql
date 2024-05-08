-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('VERY_LOW', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CREATED', 'SUBMITTED', 'APPROVED');

-- CreateTable
CREATE TABLE "User" (
    "authSchId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("authSchId")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "tags" TEXT[],
    "messages" TEXT[],
    "priority" "Priority" NOT NULL DEFAULT 'MEDIUM',
    "color" "Color" NOT NULL DEFAULT 'RED',
    "status" "Status" NOT NULL DEFAULT 'CREATED',
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_organizers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_organizers_AB_unique" ON "_organizers"("A", "B");

-- CreateIndex
CREATE INDEX "_organizers_B_index" ON "_organizers"("B");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("authSchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_organizers" ADD CONSTRAINT "_organizers_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_organizers" ADD CONSTRAINT "_organizers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("authSchId") ON DELETE CASCADE ON UPDATE CASCADE;
