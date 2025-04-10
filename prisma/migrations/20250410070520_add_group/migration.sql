-- CreateEnum
CREATE TYPE "GroupWorkspaceRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateTable
CREATE TABLE "group" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "group_user" (
    "user_id" TEXT NOT NULL,
    "group_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "group_user_pkey" PRIMARY KEY ("group_id","user_id")
);

-- CreateTable
CREATE TABLE "group_workspace" (
    "group_id" TEXT NOT NULL,
    "workspace_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "role" "GroupWorkspaceRole" NOT NULL,

    CONSTRAINT "group_workspace_pkey" PRIMARY KEY ("group_id","workspace_id")
);

-- CreateIndex
CREATE INDEX "group_company_id_idx" ON "group"("company_id");

-- CreateIndex
CREATE INDEX "group_deleted_at_idx" ON "group"("deleted_at");

-- CreateIndex
CREATE INDEX "group_user_user_id_idx" ON "group_user"("user_id");

-- CreateIndex
CREATE INDEX "group_user_deleted_at_idx" ON "group_user"("deleted_at");

-- CreateIndex
CREATE INDEX "group_workspace_workspace_id_idx" ON "group_workspace"("workspace_id");

-- CreateIndex
CREATE INDEX "group_workspace_deleted_at_idx" ON "group_workspace"("deleted_at");

-- AddForeignKey
ALTER TABLE "group" ADD CONSTRAINT "group_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_user" ADD CONSTRAINT "group_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_user" ADD CONSTRAINT "group_user_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_workspace" ADD CONSTRAINT "group_workspace_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "group_workspace" ADD CONSTRAINT "group_workspace_workspace_id_fkey" FOREIGN KEY ("workspace_id") REFERENCES "workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
