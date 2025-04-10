import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { DataModule } from '../data/data.module'
import { UsersController } from './users.controller';

@Module({
  imports: [DataModule],
  controllers: [UserController, UsersController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
