-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "usedfor" TEXT NOT NULL,
    "tipstriks" TEXT NOT NULL,
    "mistakes" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);
