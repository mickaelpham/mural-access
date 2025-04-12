import { z } from 'zod'
import { entityId } from '../../data/id.service'
import { createZodDto } from 'nestjs-zod'

const patchGroupWorkspaceRequestSchema = z
  .object({
    operation: z.enum(['add', 'replace', 'remove']),
    workspaceId: entityId('workspace'),
    role: z.enum(['ADMIN', 'MEMBER']).optional().default('MEMBER'),
  })
  .array()
  .min(1)
  .max(50)

export class PatchGroupWorkspaceRequestDto extends createZodDto(
  patchGroupWorkspaceRequestSchema,
) {}
