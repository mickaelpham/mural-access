import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const showWorkspaceRequestSchema = z.object({
  as: entityId('user'),
})

export class ShowWorkspaceRequestSchemaDto extends createZodDto(
  showWorkspaceRequestSchema,
) {}
