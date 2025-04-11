import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const createUserRequestSchema = z.object({
  username: z.string().min(1).max(100),
  displayName: z.string().min(1).max(100),
  companyId: z.string().optional(),
})

export class CreateUserRequestDto extends createZodDto(
  createUserRequestSchema,
) {}
