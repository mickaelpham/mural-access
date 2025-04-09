import { Controller, Get, Query } from '@nestjs/common'
import { ListWorkspaceDto } from './dto/list-workspace.dto'
import { WorkspaceService } from './workspace.service'

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Get()
  async list(@Query() dto: ListWorkspaceDto) {
    const [hasMore, workspaces] = await this.workspaceService.list(dto)
    return { data: workspaces, hasMore, size: workspaces.length }
  }
}
