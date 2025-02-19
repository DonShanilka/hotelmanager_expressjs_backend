-- CreateTable
CREATE TABLE `Guest` (
    `guestId` VARCHAR(191) NOT NULL,
    `guestName` VARCHAR(191) NOT NULL,
    `contactNumber` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `roomNumber` VARCHAR(191) NOT NULL,
    `checkInDate` VARCHAR(191) NOT NULL,
    `checkOutDate` VARCHAR(191) NOT NULL,
    `nation` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Guest_email_key`(`email`),
    PRIMARY KEY (`guestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Accusation` (
    `accusationId` INTEGER NOT NULL AUTO_INCREMENT,
    `reportType` VARCHAR(191) NOT NULL,
    `guestId` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`accusationId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `roomNumber` VARCHAR(191) NOT NULL,
    `roomType` VARCHAR(191) NOT NULL,
    `selectedImage` LONGBLOB NOT NULL,
    `hallFloor` INTEGER NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`roomNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HouseKeeping` (
    `houseKeepingId` INTEGER NOT NULL AUTO_INCREMENT,
    `roomNumber` VARCHAR(191) NOT NULL,
    `cleaningDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `specialTasks` VARCHAR(191) NOT NULL,
    `empId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`houseKeepingId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `paymentId` INTEGER NOT NULL AUTO_INCREMENT,
    `guestId` VARCHAR(191) NOT NULL,
    `roomNumber` VARCHAR(191) NOT NULL,
    `guestName` VARCHAR(191) NOT NULL,
    `checkInDate` DATETIME(3) NOT NULL,
    `checkOutDate` DATETIME(3) NOT NULL,
    `totalNight` INTEGER NOT NULL,
    `roomPerNight` DECIMAL(65, 30) NOT NULL,
    `additionalCharges` DECIMAL(65, 30) NOT NULL,
    `paymentMethod` VARCHAR(191) NOT NULL,
    `cashReceive` DECIMAL(65, 30) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bookingBookingID` INTEGER NULL,

    PRIMARY KEY (`paymentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `bookingID` INTEGER NOT NULL AUTO_INCREMENT,
    `guestID` VARCHAR(191) NOT NULL,
    `roomNumber` VARCHAR(191) NOT NULL,
    `checkInDate` VARCHAR(191) NOT NULL,
    `checkOutDate` VARCHAR(191) NOT NULL,
    `totalAmount` DECIMAL(65, 30) NOT NULL,
    `totalNight` INTEGER NOT NULL,
    `bookingStatus` ENUM('Confirmed', 'Cancelled', 'CheckedOut') NOT NULL DEFAULT 'Confirmed',
    `createdAt` VARCHAR(191) NOT NULL,

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
    `guestId` VARCHAR(191) NOT NULL,
    `serviceID` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `totalCost` DECIMAL(65, 30) NOT NULL,
    `usageDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`usageID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `employeeID` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NULL,
    `role` VARCHAR(191) NOT NULL,
    `salary` DECIMAL(65, 30) NULL,
    `hireDate` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Employee_email_key`(`email`),
    PRIMARY KEY (`employeeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `HouseKeeping` ADD CONSTRAINT `HouseKeeping_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_guestId_fkey` FOREIGN KEY (`guestId`) REFERENCES `Guest`(`guestId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_roomNumber_fkey` FOREIGN KEY (`roomNumber`) REFERENCES `Room`(`roomNumber`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
