import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const updateWorkspaceRequestSchema = z.object({
  as: z.string().length(30).startsWith('usr_'),
  workspaceName: z.string().min(1).max(100).optional(),
})

export class UpdateWorkspaceRequestSchemaDto extends createZodDto(
  updateWorkspaceRequestSchema,
) {}
