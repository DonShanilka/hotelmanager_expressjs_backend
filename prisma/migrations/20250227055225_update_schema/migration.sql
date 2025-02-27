-- CreateTable
CREATE TABLE `User` (
    `userEmail` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_userEmail_key`(`userEmail`),
    PRIMARY KEY (`userEmail`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
