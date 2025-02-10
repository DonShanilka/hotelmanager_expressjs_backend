/*
  Warnings:

  - The primary key for the `employee` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `employee` DROP PRIMARY KEY,
    MODIFY `employeeID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`employeeID`);

-- AlterTable
ALTER TABLE `housekeeping` MODIFY `empId` VARCHAR(191) NOT NULL;
