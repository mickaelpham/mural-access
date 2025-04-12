import { z } from 'zod'
import { entityId } from '../../data/id.service'
import { createZodDto } from 'nestjs-zod'

const groupListRequestSchema = z.object({
  companyId: entityId('company').optional(),
  endingBefore: entityId('group').optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum(['createdAt', 'updatedAt', 'name'])
    .optional()
    .default('updatedAt'),
  startingAfter: entityId('group').optional(),
})

export class GroupListRequestDto extends createZodDto(groupListRequestSchema) {}
