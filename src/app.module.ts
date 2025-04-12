import { Module } from '@nestjs/common'
import { DataModule } from './data/data.module'
import { UserModule } from './user/user.module'
import { APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'
import { WorkspaceModule } from './workspace/workspace.module'
import { CompanyModule } from './company/company.module'

@Module({
  imports: [DataModule, UserModule, WorkspaceModule, CompanyModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
