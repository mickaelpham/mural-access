-- AlterTable
ALTER TABLE "workspace" ADD COLUMN     "company_id" TEXT;

-- CreateIndex
CREATE INDEX "workspace_company_id_idx" ON "workspace"("company_id");

-- AddForeignKey
ALTER TABLE "workspace" ADD CONSTRAINT "workspace_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
