-- CreateTable
CREATE TABLE `Crop` (
    `cropId` INTEGER NOT NULL AUTO_INCREMENT,
    `commonName` VARCHAR(191) NOT NULL,
    `scientificName` VARCHAR(191) NOT NULL,
    `cropImg` LONGTEXT NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,
    `fieldId` INTEGER NULL,

    PRIMARY KEY (`cropId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipment` (
    `eqId` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `equipmentType` ENUM('ELECTRICAL', 'MECHANICAL') NOT NULL,
    `status` ENUM('AVAILABLE', 'UNAVAILABLE') NOT NULL,
    `staffId` INTEGER NULL,
    `fieldId` INTEGER NULL,

    PRIMARY KEY (`eqId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Field` (
    `fieldId` INTEGER NOT NULL AUTO_INCREMENT,
    `fieldName` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `extend` VARCHAR(191) NOT NULL,
    `fieldImg1` LONGTEXT NULL,
    `fieldImg2` LONGTEXT NULL,

    PRIMARY KEY (`fieldId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `log_date` VARCHAR(191) NOT NULL,
    `log_details` VARCHAR(191) NOT NULL,
    `observed_image` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Staff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `designation` ENUM('MANAGER', 'ADMINISTRATIVE', 'SCIENTIST', 'FIELD_WORKER') NOT NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL,
    `joined_date` VARCHAR(191) NOT NULL,
    `dob` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contact_no` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('MANAGER', 'ADMIN', 'SCIENTIST') NOT NULL,

    UNIQUE INDEX `Staff_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('MANAGER', 'ADMIN', 'SCIENTIST') NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `vehicle_code` INTEGER NOT NULL AUTO_INCREMENT,
    `licensePlateNumber` VARCHAR(191) NOT NULL,
    `vehicleCategory` VARCHAR(191) NOT NULL,
    `fuelType` VARCHAR(191) NOT NULL,
    `status` ENUM('AVAILABLE', 'UNAVAILABLE') NOT NULL,
    `staffId` INTEGER NULL,

    PRIMARY KEY (`vehicle_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Crop` ADD CONSTRAINT `Crop_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`fieldId`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `Staff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Equipment` ADD CONSTRAINT `Equipment_fieldId_fkey` FOREIGN KEY (`fieldId`) REFERENCES `Field`(`fieldId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Vehicle` ADD CONSTRAINT `Vehicle_staffId_fkey` FOREIGN KEY (`staffId`) REFERENCES `Staff`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
