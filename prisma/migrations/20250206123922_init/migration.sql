/*
  Warnings:

  - You are about to drop the `reservation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `empId` to the `HouseKeeping` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `Reservation_guestId_fkey`;

-- DropForeignKey
ALTER TABLE `reservation` DROP FOREIGN KEY `Reservation_roomNumber_fkey`;

-- AlterTable
ALTER TABLE `housekeeping` ADD COLUMN `empId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `payment` ADD COLUMN `bookingBookingID` INTEGER NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `roomPerNight` DECIMAL(65, 30) NOT NULL,
    MODIFY `additionalCharges` DECIMAL(65, 30) NOT NULL,
    MODIFY `cashReceive` DECIMAL(65, 30) NOT NULL;

-- AlterTable
ALTER TABLE `room` MODIFY `price` DECIMAL(65, 30) NOT NULL;

-- DropTable
DROP TABLE `reservation`;

-- CreateTable
CREATE TABLE `Booking` (
    `bookingID` INTEGER NOT NULL AUTO_INCREMENT,
    `guestID` INTEGER NOT NULL,
    `roomNumber` VARCHAR(191) NOT NULL,
    `checkInDate` DATETIME(3) NOT NULL,
    `checkOutDate` DATETIME(3) NOT NULL,
    `totalAmount` DECIMAL(65, 30) NOT NULL,
    `totalNight` INTEGER NOT NULL,
    `bookingStatus` ENUM('Confirmed', 'Cancelled', 'CheckedOut') NOT NULL DEFAULT 'Confirmed',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`bookingID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `serviceID` INTEGER NOT NULL AUTO_INCREMENT,
    `serviceName` VARCHAR(191) NOT NULL,
    `servicePrice` DECIMAL(65, 30) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`serviceID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceUsage` (
    `usageID` INTEGER NOT NULL AUTO_INCREMENT,
    `bookingID` INTEGER NOT NULL,
    `guestId` INTEGER NOT NULL,
    `serviceID` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `totalCost` DECIMAL(65, 30) NOT NULL,
    `usageDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`usageID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_bookingBookingID_fkey` FOREIGN KEY (`bookingBookingID`) REFERENCES `Booking`(`bookingID`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_guestID_fkey` FOREIGN KEY (`guestID`) REFERENCES `Guest`(`guestId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceUsage` ADD CONSTRAINT `ServiceUsage_bookingID_fkey` FOREIGN KEY (`bookingID`) REFERENCES `Booking`(`bookingID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceUsage` ADD CONSTRAINT `ServiceUsage_serviceID_fkey` FOREIGN KEY (`serviceID`) REFERENCES `Service`(`serviceID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceUsage` ADD CONSTRAINT `ServiceUsage_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`guestId`) ON DELETE RESTRICT ON UPDATE CASCADE;
