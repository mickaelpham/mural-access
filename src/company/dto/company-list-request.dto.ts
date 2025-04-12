import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const companyListRequestSchema = z.object({
  endingBefore: entityId('company').optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum(['createdAt', 'updatedAt', 'name'])
    .optional()
    .default('updatedAt'),
  startingAfter: entityId('company').optional(),
})

export class CompanyListRequestDto extends createZodDto(
  companyListRequestSchema,
) {}
