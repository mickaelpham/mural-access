import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { Prisma, User, Workspace } from '../../generated/prisma'
import { ListWorkspaceDto } from './dto/list-workspace.dto'

@Injectable()
export class WorkspaceService {
  constructor(
    private readonly idService: IdService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({ name, admin }: { name: Workspace['name']; admin: User }) {
    const id = this.idService.generate('workspace')
    const workspace = await this.prismaService.workspace.create({
      data: { id, name, companyId: admin.companyId },
    })

    await this.prismaService.workspaceUser.create({
      data: {
        user: { connect: admin },
        role: 'ADMIN',
        workspace: { connect: workspace },
      },
    })

    return workspace
  }

  async getById(id: Workspace['id']) {
    const workspace = await this.prismaService.workspace.findUnique({
      where: { id },
    })
    return workspace
  }

  async list(dto: ListWorkspaceDto): Promise<[boolean, Workspace[]]> {
    // Always query one more record to tell the user if they should query
    // for the next records or not
    const size = dto.size + 1

    const queryOptions: Prisma.WorkspaceFindManyArgs = dto.startingAfter
      ? { cursor: { id: dto.startingAfter }, skip: 1, take: size }
      : dto.endingBefore
        ? { cursor: { id: dto.endingBefore }, skip: 1, take: -size }
        : { take: size }

    const workspaces = await this.prismaService.workspace.findMany({
      where: { companyId: dto.companyId },
      orderBy: { [dto.sortField]: dto.sortDirection },
      ...queryOptions,
    })

    const hasMore = workspaces.length === size

    // If we end up having to fetch more records, remove the extra record
    const sliceOptions = dto.endingBefore ? [1] : [0, -1]
    const result = hasMore ? workspaces.slice(...sliceOptions) : workspaces

    return [hasMore, result]
  }
}
