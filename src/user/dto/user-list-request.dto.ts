import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const userListRequestSchema = z.object({
  companyId: entityId('company').optional(),
  endingBefore: entityId('user').optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum(['createdAt', 'updatedAt', 'username', 'displayName'])
    .optional()
    .default('updatedAt'),
  startingAfter: entityId('user').optional(),
})

export class UserListRequestDto extends createZodDto(userListRequestSchema) {}
