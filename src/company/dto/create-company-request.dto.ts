import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const createCompanyRequestSchema = z.object({
  name: z.string().min(1).max(250),
})

export class CreateCompanyRequestDto extends createZodDto(
  createCompanyRequestSchema,
) {}
