import { Module } from '@nestjs/common'
import { CompanyService } from './company.service'
import { CompaniesController } from './companies.controller'
import { DataModule } from '../data/data.module'

@Module({
  imports: [DataModule],
  providers: [CompanyService],
  controllers: [CompaniesController],
})
export class CompanyModule {}
