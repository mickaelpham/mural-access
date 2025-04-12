import { z } from 'zod'
import { entityId } from '../../data/id.service'
import { createZodDto } from 'nestjs-zod'

const patchGroupUserRequestSchema = z
  .object({
    operation: z.enum(['add', 'remove']),
    userId: entityId('user'),
  })
  .array()
  .min(1)
  .max(50)

export class PatchGroupUserRequestDto extends createZodDto(
  patchGroupUserRequestSchema,
) {}
