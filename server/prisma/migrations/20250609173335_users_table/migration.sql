-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(191) NOT NULL,
    "email" VARCHAR(191) NOT NULL,
    "image" TEXT,
    "provider" VARCHAR(191) NOT NULL,
    "oauthId" VARCHAR(191) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_oauthId_key" ON "users"("oauthId");
