import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const createWorkspaceSchema = z
  .object({
    adminUserId: z.string(),
    workspaceName: z.string().min(1).max(100),
  })
  .required()

export class CreateWorkspaceDto extends createZodDto(createWorkspaceSchema) {}
