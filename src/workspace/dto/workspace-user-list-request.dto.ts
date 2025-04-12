import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const workspaceUserListRequestSchema = z.object({
  endingBefore: entityId('user').optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum([
      'createdAt',
      'displayName',
      'role',
      'updatedAt',
      'userId',
      'username',
    ])
    .optional()
    .default('updatedAt'),
  startingAfter: entityId('user').optional(),
})

export class WorkspaceUserListRequestDto extends createZodDto(
  workspaceUserListRequestSchema,
) {}
