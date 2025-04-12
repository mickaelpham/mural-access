import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const patchWorkspaceUserRequestSchema = z
  .object({
    operation: z.enum(['add', 'replace', 'remove']),
    userId: entityId('user'),
    role: z.enum(['ADMIN', 'MEMBER', 'GUEST']).optional().default('MEMBER'),
  })
  .array()
  .min(1)
  .max(50)

export class PatchWorkspaceUserRequestDto extends createZodDto(
  patchWorkspaceUserRequestSchema,
) {}
