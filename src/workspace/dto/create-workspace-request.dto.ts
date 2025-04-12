import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const createWorkspaceRequestSchema = z
  .object({
    adminUserId: entityId('user'),
    workspaceName: z.string().min(1).max(100),
  })
  .required()

export class CreateWorkspaceRequestDto extends createZodDto(
  createWorkspaceRequestSchema,
) {}
