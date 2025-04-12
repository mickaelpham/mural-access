import { Injectable } from '@nestjs/common'
import { WorkspaceUserListRequestDto } from './dto/workspace-user-list-request.dto'
import { serializeWorkspaceUser } from './serializer/workspace-user.serializer'
import { PatchWorkspaceUserRequestDto } from './dto/patch-workspace-user-request.dto'
import { WorkspaceUserResponseDto } from './dto/workspace-user-list-response.dto'
import { Workspace, Prisma, User, WorkspaceUser } from '../../generated/prisma'
import { PrismaService } from '../data/prisma.service'
import { OpenFgaService } from '../data/open-fga.service'
import { TupleKey, TupleKeyWithoutCondition } from '@openfga/sdk'
import { keyBy } from 'lodash'

const WORKSPACE_USER_ROLES = ['ADMIN', 'GUEST', 'MEMBER'] as const

@Injectable()
export class WorkspaceUserService {
  constructor(
    private readonly openFgaService: OpenFgaService,
    private readonly prismaService: PrismaService,
  ) {}

  async listUsers(
    workspaceId: Workspace['id'],
    dto: WorkspaceUserListRequestDto,
  ): Promise<[boolean, WorkspaceUserResponseDto[]]> {
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

  async updateUsers(
    workspaceId: Workspace['id'],
    dto: PatchWorkspaceUserRequestDto,
    workspaceUsers: WorkspaceUser[],
  ) {
    const addList: Prisma.WorkspaceUserCreateManyInput[] = []
    const removeList: Array<User['id']> = []
    const replaceList: Record<WorkspaceUser['role'], Array<User['id']>> = {
      ADMIN: [],
      GUEST: [],
      MEMBER: [],
    }
    const writeTuples: TupleKey[] = []
    const deleteTuples: TupleKeyWithoutCondition[] = []
    const workspaceUserMap = keyBy(workspaceUsers, 'userId')

    for (const op of dto) {
      switch (op.operation) {
        case 'add':
          addList.push({
            workspaceId,
            userId: op.userId,
            role: op.role,
          })

          writeTuples.push({
            user: `user:${op.userId}`,
            relation: op.role.toLocaleLowerCase(),
            object: `workspace:${workspaceId}`,
          })
          break
        case 'remove':
          removeList.push(op.userId)

          deleteTuples.push({
            user: `user:${op.userId}`,
            relation: workspaceUserMap[op.userId].role.toLocaleLowerCase(),
            object: `workspace:${workspaceId}`,
          })
          break
        case 'replace':
          replaceList[op.role].push(op.userId)

          deleteTuples.push({
            user: `user:${op.userId}`,
            relation: workspaceUserMap[op.userId].role.toLocaleLowerCase(),
            object: `workspace:${workspaceId}`,
          })

          writeTuples.push({
            user: `user:${op.userId}`,
            relation: op.role.toLocaleLowerCase(),
            object: `workspace:${workspaceId}`,
          })
          break
      }
    }

    // Adding new users to the workspace
    await this.prismaService.workspaceUser.createMany({ data: addList })

    // Changing existing user permissions in the workspace
    const now = new Date()
    await this.prismaService.workspaceUser.updateMany({
      where: { workspaceId, userId: { in: removeList } },
      data: { deletedAt: now, updatedAt: now },
    })

    for (const role of WORKSPACE_USER_ROLES) {
      await this.prismaService.workspaceUser.updateMany({
        where: { workspaceId, userId: { in: replaceList[role] } },
        data: { role },
      })
    }

    await this.openFgaService.write({
      writes: writeTuples,
      deletes: deleteTuples,
    })
  }

  async getByUserIds(workspaceId: Workspace['id'], userIds: Array<User['id']>) {
    return await this.prismaService.workspaceUser.findMany({
      where: { workspaceId, userId: { in: userIds } },
    })
  }

  async canAccess(user: Pick<User, 'id'>, workspace: Pick<Workspace, 'id'>) {
    const { allowed } = await this.openFgaService.check({
      user: `user:${user.id}`,
      relation: 'can_access',
      object: `workspace:${workspace.id}`,
    })

    return !!allowed
  }

  async canEditSettings(
    user: Pick<User, 'id'>,
    workspace: Pick<Workspace, 'id'>,
  ) {
    const { allowed } = await this.openFgaService.check({
      user: `user:${user.id}`,
      relation: 'can_edit_settings',
      object: `workspace:${workspace.id}`,
    })

    return !!allowed
  }
}
