import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common'
import { WorkspaceService } from './workspace.service'
import { CreateWorkspaceDto } from './dto/create-workspace.dto'
import { UserService } from '../user/user.service'

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
  async show(@Param('id') id: string) {
    return await this.workspaceService.getById(id)
  }
}
