-- CreateTable
CREATE TABLE `FieldModel` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `extentSize` VARCHAR(191) NOT NULL,
    `image1` VARCHAR(191) NOT NULL,
    `image2` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CropModel` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `scientificName` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,
    `fieldId` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EquipmentModel` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `count` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `staffId` VARCHAR(191) NULL,
    `fieldId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VehicalModel` (
    `id` VARCHAR(191) NOT NULL,
    `lPlate` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `fuelType` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `remarks` VARCHAR(191) NULL,
    `staffId` VARCHAR(191) NULL,

    UNIQUE INDEX `VehicalModel_lPlate_key`(`lPlate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StaffModel` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `joinedDate` DATETIME(3) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `mobile` BIGINT NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `address1` VARCHAR(191) NOT NULL,
    `address2` VARCHAR(191) NULL,
    `address3` VARCHAR(191) NULL,
    `address4` VARCHAR(191) NULL,
    `address5` VARCHAR(191) NULL,
    `fieldId` VARCHAR(191) NULL,

    UNIQUE INDEX `StaffModel_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LogModel` (
    `log_code` VARCHAR(191) NOT NULL,
    `logDate` DATETIME(3) NOT NULL,
    `logDetails` VARCHAR(191) NOT NULL,
    `image` LONGTEXT NOT NULL,

    PRIMARY KEY (`log_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FieldLog` (
    `fieldId` VARCHAR(191) NOT NULL,
    `logCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`fieldId`, `logCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CropLog` (
    `cropId` VARCHAR(191) NOT NULL,
    `logCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cropId`, `logCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StaffLog` (
    `staffId` VARCHAR(191) NOT NULL,
    `logCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`staffId`, `logCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CropModel` ADD CONSTRAINT `CropModel_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `FieldModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentModel` ADD CONSTRAINT `EquipmentModel_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `FieldModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EquipmentModel` ADD CONSTRAINT `EquipmentModel_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `StaffModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VehicalModel` ADD CONSTRAINT `VehicalModel_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `StaffModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StaffModel` ADD CONSTRAINT `StaffModel_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `FieldModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FieldLog` ADD CONSTRAINT `FieldLog_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `FieldModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FieldLog` ADD CONSTRAINT `FieldLog_logCode_fkey` FOREIGN KEY (`logCode`) REFERENCES `LogModel`(`log_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CropLog` ADD CONSTRAINT `CropLog_cropId_fkey` FOREIGN KEY (`cropId`) REFERENCES `CropModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CropLog` ADD CONSTRAINT `CropLog_logCode_fkey` FOREIGN KEY (`logCode`) REFERENCES `LogModel`(`log_code`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StaffLog` ADD CONSTRAINT `StaffLog_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `StaffModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StaffLog` ADD CONSTRAINT `StaffLog_logCode_fkey` FOREIGN KEY (`logCode`) REFERENCES `LogModel`(`log_code`) ON DELETE RESTRICT ON UPDATE CASCADE;
