import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { Prisma, User, Workspace } from '../../generated/prisma'
import { WorkspaceListRequestDto } from './dto/workspace-list-request.dto'
import { OpenFgaService } from '../data/open-fga.service'
import { UpdateWorkspaceRequestSchemaDto } from './dto/update-workspace-request.dto'

@Injectable()
export class WorkspaceService {
  constructor(
    private readonly idService: IdService,
    private readonly openFgaService: OpenFgaService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({ name, admin }: { name: Workspace['name']; admin: User }) {
    const id = this.idService.generate('workspace')
    const workspace = await this.prismaService.workspace.create({
      data: { id, name, companyId: admin.companyId },
    })

    // connect this workspace to the user
    await this.openFgaService.write({
      writes: [
        {
          user: `user:${admin.id}`,
          relation: 'admin',
          object: `workspace:${workspace.id}`,
        },
      ],
    })

    // [admin view] add the admin to the workspace user table
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

  async list(dto: WorkspaceListRequestDto): Promise<[boolean, Workspace[]]> {
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

  async update(
    id: Workspace['id'],
    dto: Omit<UpdateWorkspaceRequestSchemaDto, 'as'>,
  ) {
    const workspace = await this.prismaService.workspace.update({
      where: { id },
      data: { name: dto.workspaceName },
    })
    return workspace
  }
}
