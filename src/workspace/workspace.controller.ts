import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { WorkspaceService } from './workspace.service'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
import { UserService } from '../user/user.service'
import { ListUserDto } from './dto/list-user.dto'
import { PatchWorkspaceUserDto } from './dto/patch-workspace-user.dto'

@Controller('workspace')
export class WorkspaceController {
  constructor(
    private readonly workspaceService: WorkspaceService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() dto: CreateWorkspaceDto) {
    const user = await this.userService.getById(dto.adminUserId)
    if (!user) {
      throw new BadRequestException('admin does not exist')
    }

    return await this.workspaceService.create({
      admin: user,
      name: dto.workspaceName,
    })
  }

  @Get('/:id')
  async show(@Param('id') workspaceId: string) {
    return await this.workspaceService.getById(workspaceId)
  }

  @Get(':id/users')
  async listUsers(@Param('id') workspaceId: string, @Query() dto: ListUserDto) {
    const [hasMore, users] = await this.workspaceService.listUsers(
      workspaceId,
      dto,
    )
    return { data: users, hasMore, size: users.length }
  }

  @Patch(':id/users')
  @HttpCode(204)
  async updateUsers(
    @Param('id') workspaceId: string,
    @Body() list: PatchWorkspaceUserDto,
  ) {
    console.log('here is the list', { list })
    await this.workspaceService.updateUsers(workspaceId, list)
  }
}
