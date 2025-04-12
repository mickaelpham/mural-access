import { Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { IdService } from './id.service'
import { OpenFgaService } from './open-fga.service'

@Module({
  providers: [PrismaService, IdService, OpenFgaService],
  exports: [PrismaService, IdService, OpenFgaService],
})
export class DataModule {}
