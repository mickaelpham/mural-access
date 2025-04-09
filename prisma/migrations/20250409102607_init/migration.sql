-- CreateEnum
CREATE TYPE "WorkspaceUserRole" AS ENUM ('ADMIN', 'MEMBER', 'GUEST');

-- CreateEnum
CREATE TYPE "RoomUserRole" AS ENUM ('ADMIN', 'FACILITATOR', 'EDITOR', 'VIEWER');

-- CreateEnum
CREATE TYPE "MuralUserRole" AS ENUM ('ADMIN', 'FACILITATOR', 'EDITOR', 'VIEWER');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "company_id" TEXT,
    "display_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspace" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workspace_user" (
    "user_id" TEXT NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "role" "WorkspaceUserRole" NOT NULL,

    CONSTRAINT "workspace_user_pkey" PRIMARY KEY ("workspace_id","user_id")
);

-- CreateTable
CREATE TABLE "room" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "workspace_id" TEXT NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "room_user" (
    "room_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "role" "RoomUserRole" NOT NULL,

    CONSTRAINT "room_user_pkey" PRIMARY KEY ("room_id","user_id")
);

-- CreateTable
CREATE TABLE "mural" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "room_id" TEXT NOT NULL,

    CONSTRAINT "mural_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mural_user" (
    "mural_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "role" "MuralUserRole" NOT NULL,

    CONSTRAINT "mural_user_pkey" PRIMARY KEY ("mural_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE INDEX "user_deleted_at_idx" ON "user"("deleted_at");

-- CreateIndex
CREATE INDEX "user_company_id_idx" ON "user"("company_id");

-- CreateIndex
CREATE INDEX "company_deleted_at_idx" ON "company"("deleted_at");

-- CreateIndex
CREATE INDEX "workspace_deleted_at_idx" ON "workspace"("deleted_at");

-- CreateIndex
CREATE INDEX "workspace_user_deleted_at_idx" ON "workspace_user"("deleted_at");

-- CreateIndex
CREATE INDEX "workspace_user_user_id_idx" ON "workspace_user"("user_id");

-- CreateIndex
CREATE INDEX "workspace_user_workspace_id_role_idx" ON "workspace_user"("workspace_id", "role");

-- CreateIndex
CREATE INDEX "room_deleted_at_idx" ON "room"("deleted_at");

-- CreateIndex
CREATE INDEX "room_workspace_id_idx" ON "room"("workspace_id");

-- CreateIndex
CREATE INDEX "room_user_deleted_at_idx" ON "room_user"("deleted_at");

-- CreateIndex
CREATE INDEX "room_user_user_id_idx" ON "room_user"("user_id");

-- CreateIndex
CREATE INDEX "room_user_room_id_role_idx" ON "room_user"("room_id", "role");

-- CreateIndex
CREATE INDEX "mural_deleted_at_idx" ON "mural"("deleted_at");

-- CreateIndex
CREATE INDEX "mural_room_id_idx" ON "mural"("room_id");

-- CreateIndex
CREATE INDEX "mural_user_user_id_idx" ON "mural_user"("user_id");

-- CreateIndex
CREATE INDEX "mural_user_deleted_at_idx" ON "mural_user"("deleted_at");

-- CreateIndex
CREATE INDEX "mural_user_mural_id_role_idx" ON "mural_user"("mural_id", "role");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspace_user" ADD CONSTRAINT "workspace_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workspace_user" ADD CONSTRAINT "workspace_user_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room" ADD CONSTRAINT "room_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_user" ADD CONSTRAINT "room_user_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "room_user" ADD CONSTRAINT "room_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mural" ADD CONSTRAINT "mural_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mural_user" ADD CONSTRAINT "mural_user_mural_id_fkey" FOREIGN KEY ("mural_id") REFERENCES "mural"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mural_user" ADD CONSTRAINT "mural_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
