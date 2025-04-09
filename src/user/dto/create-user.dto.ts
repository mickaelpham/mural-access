import { createZodDto } from 'nestjs-zod'
import { z } from 'zod'

const createUserSchema = z
  .object({
    username: z.string().min(1).max(100),
    displayName: z.string().min(1).max(100),
  })
  .required()

export class CreateUserDto extends createZodDto(createUserSchema) {}
