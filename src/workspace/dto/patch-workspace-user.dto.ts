import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const patchWorkspaceUserSchema = z
  .object({
    operation: z.enum(['add', 'replace', 'remove']),
    userId: z.string().nonempty(),
    role: z.enum(['ADMIN', 'MEMBER', 'GUEST']).optional().default('MEMBER'),
  })
  .array()

export class PatchWorkspaceUserDto extends createZodDto(
  patchWorkspaceUserSchema,
) {}
