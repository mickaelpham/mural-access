import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { UserListRequestDto } from './dto/user-list-request.dto'
import { UserService } from './user.service'
import { CreateUserRequestDto } from './dto/create-user-request.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async list(@Query() dto: UserListRequestDto) {
    const [hasMore, users] = await this.userService.list(dto)
    return { data: users, hasMore, size: users.length }
  }

  @Post()
  create(@Body() dto: CreateUserRequestDto) {
    return this.userService.create(dto)
  }
}
