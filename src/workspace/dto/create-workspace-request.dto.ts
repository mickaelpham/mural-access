import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const createWorkspaceRequestSchema = z
  .object({
    adminUserId: z.string(),
    workspaceName: z.string().min(1).max(100),
  })
  .required()

export class CreateWorkspaceRequestDto extends createZodDto(
  createWorkspaceRequestSchema,
) {}
