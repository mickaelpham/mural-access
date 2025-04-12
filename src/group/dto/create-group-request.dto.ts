import { z } from 'zod'
import { entityId } from '../../data/id.service'
import { createZodDto } from 'nestjs-zod'

const createGroupRequestSchema = z.object({
  name: z.string().min(1).max(250),
  companyId: entityId('company'),
})

export class CreateGroupRequestDto extends createZodDto(
  createGroupRequestSchema,
) {}
