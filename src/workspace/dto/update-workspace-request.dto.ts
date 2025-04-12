import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const updateWorkspaceRequestSchema = z.object({
  as: entityId('user'),
  workspaceName: z.string().min(1).max(100).optional(),
})

export class UpdateWorkspaceRequestSchemaDto extends createZodDto(
  updateWorkspaceRequestSchema,
) {}
