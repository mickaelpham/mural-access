import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { GroupService } from './group.service'
import { CreateGroupRequestDto } from './dto/create-group-request.dto'
import { GroupListRequestDto } from './dto/group-list-request.dto'
import { PatchGroupUserRequestDto } from './dto/patch-group-user-request.dto'
import { GroupUserService } from './group-user.service'
import { PatchGroupWorkspaceRequestDto } from './dto/patch-group-workspace-request.dto'
import { GroupWorkspaceService } from './group-workspace.service'

@Controller('groups')
export class GroupsController {
  constructor(
    private readonly groupService: GroupService,
    private readonly groupUserService: GroupUserService,
    private readonly groupWorkspaceService: GroupWorkspaceService,
  ) {}

  @Post()
  async create(@Body() dto: CreateGroupRequestDto) {
    return await this.groupService.create(dto)
  }

  @Get()
  async list(@Query() dto: GroupListRequestDto) {
    const [hasMore, groups] = await this.groupService.list(dto)
    return { data: groups, hasMore, size: groups.length }
  }

  @Get(':id')
  async show(@Param('id') groupId: string) {
    return await this.groupService.getById(groupId)
  }

  @Patch(':id/users')
  @HttpCode(204)
  async updateUsers(
    @Param('id') groupId: string,
    @Body() dto: PatchGroupUserRequestDto,
  ) {
    await this.groupUserService.updateUsers(groupId, dto)
  }

  @Patch(':id/workspaces')
  @HttpCode(204)
  async updateWorkspaces(
    @Param('id') groupId: string,
    @Body() dto: PatchGroupWorkspaceRequestDto,
  ) {
    const groupWorkspaces = await this.groupWorkspaceService.getByWorkspaceIds(
      groupId,
      dto.map((op) => op.workspaceId),
    )

    await this.groupWorkspaceService.updateWorkspaces(
      groupId,
      dto,
      groupWorkspaces,
    )
  }
}
