import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { CreateCompanyRequestDto } from './dto/create-company-request.dto'
import { Company, Prisma } from '../../generated/prisma'
import { CompanyListRequestDto } from './dto/company-list-request.dto'

@Injectable()
export class CompanyService {
  constructor(
    private readonly idService: IdService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({ name }: CreateCompanyRequestDto) {
    const id = this.idService.generate('company')
    const company = await this.prismaService.company.create({
      data: { id, name },
    })
    return company
  }

  async getById(id: Company['id']) {
    return await this.prismaService.company.findUnique({ where: { id } })
  }

  async list(dto: CompanyListRequestDto): Promise<[boolean, Company[]]> {
    // Always query one more record to tell the user if they should query
    // for the next records or not
    const size = dto.size + 1

    const queryOptions: Prisma.CompanyFindManyArgs = dto.startingAfter
      ? { cursor: { id: dto.startingAfter }, skip: 1, take: size }
      : dto.endingBefore
        ? { cursor: { id: dto.endingBefore }, skip: 1, take: -size }
        : { take: size }

    const companies = await this.prismaService.company.findMany({
      ...queryOptions,
      orderBy: { [dto.sortField]: dto.sortDirection },
    })

    const hasMore = companies.length === size

    // If we end up having to fetch more records, remove the extra record
    const sliceOptions = dto.endingBefore ? [1] : [0, -1]
    const result = hasMore ? companies.slice(...sliceOptions) : companies

    return [hasMore, result]
  }
}
