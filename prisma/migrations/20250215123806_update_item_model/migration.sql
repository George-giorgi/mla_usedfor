/*
  Warnings:

  - You are about to drop the column `mistakesphotoURL` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `usedphotoURL` on the `Item` table. All the data in the column will be lost.
  - Added the required column `mistakesphoto_url` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usedphoto_url` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "mistakesphotoURL",
DROP COLUMN "usedphotoURL",
ADD COLUMN     "mistakesphoto_url" TEXT NOT NULL,
ADD COLUMN     "usedphoto_url" TEXT NOT NULL;
