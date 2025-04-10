import { Controller, Get, Query } from '@nestjs/common'
import { ListUserDto } from './dto/list-user.dto'
import { UserService } from './user.service'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list(@Query() dto: ListUserDto) {
    const [hasMore, users] = await this.userService.list(dto)
    return { data: users, hasMore, size: users.length }
  }
}
