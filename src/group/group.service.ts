import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { CreateGroupRequestDto } from './dto/create-group-request.dto'
import { GroupListRequestDto } from './dto/group-list-request.dto'
import { Group, Prisma } from '../../generated/prisma'

@Injectable()
export class GroupService {
  constructor(
    private readonly idService: IdService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({ companyId, name }: CreateGroupRequestDto) {
    const id = this.idService.generate('group')
    const group = await this.prismaService.group.create({
      data: { id, companyId, name },
    })
    return group
  }

  async list(dto: GroupListRequestDto): Promise<[boolean, Group[]]> {
    // Always query one more record to tell the user if they should query
    // for the next records or not
    const size = dto.size + 1

    const queryOptions: Prisma.GroupFindManyArgs = dto.startingAfter
      ? { cursor: { id: dto.startingAfter }, skip: 1, take: size }
      : dto.endingBefore
        ? { cursor: { id: dto.endingBefore }, skip: 1, take: -size }
        : { take: size }

    const groups = await this.prismaService.group.findMany({
      ...queryOptions,
      where: { companyId: dto.companyId },
      orderBy: { [dto.sortField]: dto.sortDirection },
    })

    const hasMore = groups.length === size

    // If we end up having to fetch more records, remove the extra record
    const sliceOptions = dto.endingBefore ? [1] : [0, -1]
    const result = hasMore ? groups.slice(...sliceOptions) : groups

    return [hasMore, result]
  }

  async getById(id: Group['id']) {
    return await this.prismaService.group.findUnique({
      where: { id },
      include: { company: true, users: true, workspaces: true },
    })
  }
}
