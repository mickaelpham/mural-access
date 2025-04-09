import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { IdService } from './id.service'

@Module({
  providers: [PrismaService, IdService],
  exports: [PrismaService, IdService],
})
export class DataModule {}
