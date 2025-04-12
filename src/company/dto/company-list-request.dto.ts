import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const companyListRequestSchema = z.object({
  endingBefore: z.string().optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum(['createdAt', 'updatedAt', 'name'])
    .optional()
    .default('updatedAt'),
  startingAfter: z.string().optional(),
})

export class CompanyListRequestDto extends createZodDto(
  companyListRequestSchema,
) {}
