/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `DoctorNote` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `HealthRecord` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Doctor_id_key` ON `Doctor`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Doctor_username_key` ON `Doctor`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `DoctorNote_id_key` ON `DoctorNote`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `HealthRecord_id_key` ON `HealthRecord`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_id_key` ON `User`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `User`(`username`);
