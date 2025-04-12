import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { CompanyService } from './company.service'
import { CompanyListRequestDto } from './dto/company-list-request.dto'
import { CreateCompanyRequestDto } from './dto/create-company-request.dto'

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async list(@Query() dto: CompanyListRequestDto) {
    const [hasMore, companies] = await this.companyService.list(dto)
    return { data: companies, hasMore, size: companies.length }
  }

  @Post()
  create(@Body() dto: CreateCompanyRequestDto) {
    return this.companyService.create(dto)
  }
}
