import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const workspaceListRequestSchema = z.object({
  companyId: z.string().optional(),
  endingBefore: z.string().optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum(['createdAt', 'updatedAt', 'name'])
    .optional()
    .default('updatedAt'),
  startingAfter: z.string().optional(),
})

export class WorkspaceListRequestDto extends createZodDto(
  workspaceListRequestSchema,
) {}
