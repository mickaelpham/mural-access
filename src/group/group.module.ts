import { Module } from '@nestjs/common'
import { GroupService } from './group.service'
import { GroupsController } from './groups.controller'
import { DataModule } from '../data/data.module'
import { GroupUserService } from './group-user.service';

@Module({
  imports: [DataModule],
  providers: [GroupService, GroupUserService],
  controllers: [GroupsController],
})
export class GroupModule {}
