import { Module } from '@nestjs/common'
import { WorkspaceService } from './workspace.service'
import { DataModule } from '../data/data.module'
import { UserModule } from '../user/user.module'
import { WorkspacesController } from './workspaces.controller'
import { WorkspaceUserService } from './workspace-user.service'

@Module({
  imports: [DataModule, UserModule],
  controllers: [WorkspacesController],
  providers: [WorkspaceService, WorkspaceUserService],
})
export class WorkspaceModule {}
