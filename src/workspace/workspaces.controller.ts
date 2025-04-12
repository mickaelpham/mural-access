import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { WorkspaceListRequestDto } from './dto/workspace-list-request.dto'
import { WorkspaceService } from './workspace.service'
import { UserService } from '../user/user.service'
import { CreateWorkspaceRequestDto } from './dto/create-workspace-request.dto'
import { WorkspaceUserListRequestDto } from './dto/workspace-user-list-request.dto'
import { PatchWorkspaceUserRequestDto } from './dto/patch-workspace-user-request.dto'
import { WorkspaceUserListResponseDto } from './dto/workspace-user-list-response.dto'
import { WorkspaceUserService } from './workspace-user.service'
import { ShowWorkspaceRequestSchemaDto } from './dto/show-workspace-request.dto'
import { UpdateWorkspaceRequestSchemaDto } from './dto/update-workspace-request.dto'

@Controller('workspaces')
export class WorkspacesController {
  constructor(
    private readonly userService: UserService,
    private readonly workspaceService: WorkspaceService,
    private readonly workspaceUserService: WorkspaceUserService,
  ) {}

  /**
   * List all workspaces
   */
  @Get()
  async list(@Query() dto: WorkspaceListRequestDto) {
    const [hasMore, workspaces] = await this.workspaceService.list(dto)
    return { data: workspaces, hasMore, size: workspaces.length }
  }

  /**
   * Create a new workspace
   */
  @Post()
  async create(@Body() dto: CreateWorkspaceRequestDto) {
    const user = await this.userService.getById(dto.adminUserId)
    if (!user) {
      throw new BadRequestException('admin does not exist')
    }

    return await this.workspaceService.create({
      admin: user,
      name: dto.workspaceName,
    })
  }

  /**
   * Retrieve a specific workspace details
   */
  @Get(':id')
  async show(
    @Param('id') workspaceId: string,
    @Query() dto: ShowWorkspaceRequestSchemaDto,
  ) {
    const allowed = await this.workspaceUserService.canAccess(
      { id: dto.as },
      { id: workspaceId },
    )
    if (!allowed) {
      throw new ForbiddenException()
    }

    return await this.workspaceService.getById(workspaceId)
  }

  /**
   * Edit settings
   */
  @Patch(':id')
  async update(
    @Param('id') workspaceId: string,
    @Body() dto: UpdateWorkspaceRequestSchemaDto,
  ) {
    const allowed = await this.workspaceUserService.canEditSettings(
      { id: dto.as },
      { id: workspaceId },
    )
    if (!allowed) {
      throw new ForbiddenException()
    }

    return await this.workspaceService.update(workspaceId, dto)
  }

  /**
   * List users of a specific workspace
   */
  @Get(':id/users')
  async listUsers(
    @Param('id') workspaceId: string,
    @Query() dto: WorkspaceUserListRequestDto,
  ): Promise<WorkspaceUserListResponseDto> {
    const [hasMore, users] = await this.workspaceUserService.listUsers(
      workspaceId,
      dto,
    )
    return { data: users, hasMore, size: users.length }
  }

  /**
   * Add, replace, and remove users for a specific workspace
   */
  @Patch(':id/users')
  @HttpCode(204)
  async updateUsers(
    @Param('id') workspaceId: string,
    @Body() dto: PatchWorkspaceUserRequestDto,
  ): Promise<void> {
    const workspaceUsers = await this.workspaceUserService.getByUserIds(
      workspaceId,
      dto.map((op) => op.userId),
    )

    await this.workspaceUserService.updateUsers(
      workspaceId,
      dto,
      workspaceUsers,
    )
  }
}
