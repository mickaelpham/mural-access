import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const showWorkspaceRequestSchema = z.object({
  as: z.string().length(30).startsWith('usr_'),
})

export class ShowWorkspaceRequestSchemaDto extends createZodDto(
  showWorkspaceRequestSchema,
) {}
