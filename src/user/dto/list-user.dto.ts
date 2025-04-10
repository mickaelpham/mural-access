import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const listUserSchema = z.object({
  companyId: z.string().optional(),
  endingBefore: z.string().optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum(['createdAt', 'updatedAt', 'username', 'displayName'])
    .optional()
    .default('updatedAt'),
  startingAfter: z.string().optional(),
})

export class ListUserDto extends createZodDto(listUserSchema) {}
