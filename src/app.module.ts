import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DataModule } from './data/data.module'
import { UserModule } from './user/user.module'
import { APP_PIPE } from '@nestjs/core'
import { ZodValidationPipe } from 'nestjs-zod'

@Module({
  imports: [DataModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
