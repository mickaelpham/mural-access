import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { Prisma, User } from '../../generated/prisma'
import { CreateUserRequestDto } from './dto/create-user-request.dto'
import { UserListRequestDto } from './dto/user-list-request.dto'
import { OpenFgaService } from '../data/open-fga.service'

@Injectable()
export class UserService {
  constructor(
    private readonly idService: IdService,
    private readonly openFgaService: OpenFgaService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({ companyId, displayName, username }: CreateUserRequestDto) {
    const id = this.idService.generate('user')

    const user = await this.prismaService.user.create({
      data: { id, displayName, username, companyId },
    })

    // if the user belongs to a company, create the relationship as well
    if (companyId) {
      await this.openFgaService.write({
        writes: [
          {
            user: `user:${user.id}`,
            relation: 'member',
            object: `company:${companyId}`,
          },
        ],
      })
    }

    return user
  }

  async getById(id: User['id']) {
    return await this.prismaService.user.findUnique({ where: { id } })
  }

  async list(dto: UserListRequestDto): Promise<[boolean, User[]]> {
    // Always query one more record to tell the user if they should query
    // for the next records or not
    const size = dto.size + 1

    const queryOptions: Prisma.UserFindManyArgs = dto.startingAfter
      ? { cursor: { id: dto.startingAfter }, skip: 1, take: size }
      : dto.endingBefore
        ? { cursor: { id: dto.endingBefore }, skip: 1, take: -size }
        : { take: size }

    const users = await this.prismaService.user.findMany({
      ...queryOptions,
      where: { companyId: dto.companyId },
      orderBy: { [dto.sortField]: dto.sortDirection },
    })

    const hasMore = users.length === size

    // If we end up having to fetch more records, remove the extra record
    const sliceOptions = dto.endingBefore ? [1] : [0, -1]
    const result = hasMore ? users.slice(...sliceOptions) : users

    return [hasMore, result]
  }
}
