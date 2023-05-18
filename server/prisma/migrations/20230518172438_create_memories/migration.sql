/*
  Warnings:

  - A unique constraint covering the columns `[githubID]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatarURL` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `avatarURL` VARCHAR(191) NOT NULL,
    ADD COLUMN `githubID` INTEGER NOT NULL,
    ADD COLUMN `login` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Memory` (
    `id` VARCHAR(191) NOT NULL,
    `coverUrl` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `isPublic` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_githubID_key` ON `User`(`githubID`);

-- AddForeignKey
ALTER TABLE `Memory` ADD CONSTRAINT `Memory_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
