import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { Prisma, User } from '../../generated/prisma'
import { CreateUserDto } from './dto/create-user.dto'
import { ListUserDto } from './dto/list-user.dto'

@Injectable()
export class UserService {
  constructor(
    private readonly idService: IdService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({ companyId, displayName, username }: CreateUserDto) {
    const id = this.idService.generate('user')
    const user = await this.prismaService.user.create({
      data: { id, displayName, username, companyId },
    })
    return user
  }

  async getById(id: User['id']) {
    return await this.prismaService.user.findUnique({ where: { id } })
  }

  async list(dto: ListUserDto): Promise<[boolean, User[]]> {
    // Always query one more record to tell the user if they should query
    // for the next records or not
    const size = dto.size + 1

    const queryOptions: Prisma.UserFindManyArgs = dto.startingAfter
      ? { cursor: { id: dto.startingAfter }, skip: 1, take: size }
      : dto.endingBefore
        ? { cursor: { id: dto.endingBefore }, skip: 1, take: -size }
        : { take: size }

    const users = await this.prismaService.user.findMany({
      where: { companyId: dto.companyId },
      orderBy: { [dto.sortField]: dto.sortDirection },
      ...queryOptions,
    })

    const hasMore = users.length === size

    // If we end up having to fetch more records, remove the extra record
    const sliceOptions = dto.endingBefore ? [1] : [0, -1]
    const result = hasMore ? users.slice(...sliceOptions) : users

    return [hasMore, result]
  }
}
