import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const workspaceListRequestSchema = z.object({
  companyId: entityId('company').optional(),
  endingBefore: entityId('workspace').optional(),
  size: z.coerce.number().int().min(1).max(100).optional().default(20),
  sortDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  sortField: z
    .enum(['createdAt', 'updatedAt', 'name'])
    .optional()
    .default('updatedAt'),
  startingAfter: entityId('workspace').optional(),
})

export class WorkspaceListRequestDto extends createZodDto(
  workspaceListRequestSchema,
) {}
