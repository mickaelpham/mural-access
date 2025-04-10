import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { Prisma, User, Workspace, WorkspaceUser } from '../../generated/prisma'
import { ListWorkspaceDto } from './dto/list-workspace.dto'
import { ListUserDto } from './dto/list-user.dto'
import {
  serializeWorkspaceUser,
  WorkspaceUserDto,
} from './serializer/workspace-user.serializer'
import { PatchWorkspaceUserDto } from './dto/patch-workspace-user.dto'

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

  async listUsers(
    workspaceId: Workspace['id'],
    dto: ListUserDto,
  ): Promise<[boolean, WorkspaceUserDto[]]> {
    // Always query one more record to tell the user if they should query
    // for the next records or not
    const size = dto.size + 1

    const queryOptions: Prisma.WorkspaceUserFindManyArgs = dto.startingAfter
      ? {
          cursor: {
            workspaceId_userId: { workspaceId, userId: dto.startingAfter },
          },
          skip: 1,
          take: size,
        }
      : dto.endingBefore
        ? {
            cursor: {
              workspaceId_userId: { workspaceId, userId: dto.endingBefore },
            },
            skip: 1,
            take: -size,
          }
        : { take: size }

    const users = await this.prismaService.workspaceUser.findMany({
      ...queryOptions,
      where: { workspaceId },
      orderBy: { [dto.sortField]: dto.sortDirection },
      include: { user: true },
    })

    const hasMore = users.length === size

    // If we end up having to fetch more records, remove the extra record
    const sliceOptions = dto.endingBefore ? [1] : [0, -1]
    const result = hasMore ? users.slice(...sliceOptions) : users

    return [hasMore, result.map(serializeWorkspaceUser)]
  }

  async updateUsers(workspaceId: Workspace['id'], list: PatchWorkspaceUserDto) {
    const addList: Prisma.WorkspaceUserCreateManyInput[] = []
    const removeList: Array<User['id']> = []
    const replaceList: Record<WorkspaceUser['role'], Array<User['id']>> = {
      ADMIN: [],
      GUEST: [],
      MEMBER: [],
    }

    for (const op of list) {
      switch (op.operation) {
        case 'add':
          addList.push({
            workspaceId,
            userId: op.userId,
            role: op.role,
          })
          break
        case 'remove':
          removeList.push(op.userId)
          break
        case 'replace':
          replaceList[op.role].push(op.userId)
          break
      }
    }

    await this.prismaService.workspaceUser.createMany({ data: addList })

    const now = new Date()
    await this.prismaService.workspaceUser.updateMany({
      where: { workspaceId, userId: { in: removeList } },
      data: { deletedAt: now, updatedAt: now },
    })

    for (const role of ['ADMIN', 'GUEST', 'MEMBER'] as const) {
      await this.prismaService.workspaceUser.updateMany({
        where: { workspaceId, userId: { in: replaceList[role] } },
        data: { role },
      })
    }
  }
}
