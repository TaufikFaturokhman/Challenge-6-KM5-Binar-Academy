-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
