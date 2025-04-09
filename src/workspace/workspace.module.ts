import { Module } from '@nestjs/common'
import { WorkspaceController } from './workspace.controller'
import { WorkspaceService } from './workspace.service'
import { DataModule } from '../data/data.module'
import { UserModule } from '../user/user.module'
import { WorkspacesController } from './workspaces.controller'

@Module({
  imports: [DataModule, UserModule],
  controllers: [WorkspaceController, WorkspacesController],
  providers: [WorkspaceService],
})
export class WorkspaceModule {}
