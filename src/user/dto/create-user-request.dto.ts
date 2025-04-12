import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'
import { entityId } from '../../data/id.service'

const createUserRequestSchema = z.object({
  username: z.string().min(1).max(100),
  displayName: z.string().min(1).max(100),
  companyId: entityId('company').optional(),
})

export class CreateUserRequestDto extends createZodDto(
  createUserRequestSchema,
) {}
