import { Injectable } from '@nestjs/common'
import { OpenFgaService } from '../data/open-fga.service'
import { PrismaService } from '../data/prisma.service'
import {
  Group,
  GroupWorkspace,
  Prisma,
  Workspace,
} from '../../generated/prisma'
import { PatchGroupWorkspaceRequestDto } from './dto/patch-group-workspace-request.dto'
import { TupleKey, TupleKeyWithoutCondition } from '@openfga/sdk'
import { keyBy } from 'lodash'

const GROUP_WORKSPACE_ROLES = ['ADMIN', 'MEMBER'] as const

@Injectable()
export class GroupWorkspaceService {
  constructor(
    private readonly openFgaService: OpenFgaService,
    private readonly prismaService: PrismaService,
  ) {}

  async updateWorkspaces(
    groupId: Group['id'],
    dto: PatchGroupWorkspaceRequestDto,
    groupWorkspaces: GroupWorkspace[],
  ) {
    const addList: Prisma.GroupWorkspaceCreateManyInput[] = []
    const removeList: Array<Workspace['id']> = []
    const replaceList: Record<
      GroupWorkspace['role'],
      Array<Workspace['id']>
    > = {
      ADMIN: [],
      MEMBER: [],
    }
    const writeTuples: TupleKey[] = []
    const deleteTuples: TupleKeyWithoutCondition[] = []
    const groupWorkspaceMap = keyBy(groupWorkspaces, 'workspaceId')

    for (const op of dto) {
      switch (op.operation) {
        case 'add':
          addList.push({ groupId, workspaceId: op.workspaceId, role: op.role })

          writeTuples.push({
            user: `group:${groupId}#member`,
            relation: op.role.toLocaleLowerCase(),
            object: `workspace:${op.workspaceId}`,
          })
          break
        case 'remove':
          removeList.push(op.workspaceId)

          deleteTuples.push({
            user: `group:${groupId}#member`,
            relation:
              groupWorkspaceMap[op.workspaceId].role.toLocaleLowerCase(),
            object: `workspace:${op.workspaceId}`,
          })
          break
        case 'replace':
          replaceList[op.role].push(op.workspaceId)

          deleteTuples.push({
            user: `group:${groupId}#member`,
            relation:
              groupWorkspaceMap[op.workspaceId].role.toLocaleLowerCase(),
            object: `workspace:${op.workspaceId}`,
          })

          writeTuples.push({
            user: `group:${groupId}#member`,
            relation: op.role.toLocaleLowerCase(),
            object: `workspace:${op.workspaceId}`,
          })
          break
      }
    }

    await this.prismaService.groupWorkspace.createMany({ data: addList })

    const now = new Date()
    await this.prismaService.groupWorkspace.updateMany({
      where: { groupId, workspaceId: { in: removeList } },
      data: { deletedAt: now, updatedAt: now },
    })

    for (const role of GROUP_WORKSPACE_ROLES) {
      await this.prismaService.groupWorkspace.updateMany({
        where: { groupId, workspaceId: { in: replaceList[role] } },
        data: { role },
      })
    }

    await this.openFgaService.write({
      writes: writeTuples,
      deletes: deleteTuples,
    })
  }

  async getByWorkspaceIds(
    groupId: Group['id'],
    workspaceIds: Array<Workspace['id']>,
  ) {
    return await this.prismaService.groupWorkspace.findMany({
      where: { groupId, workspaceId: { in: workspaceIds } },
    })
  }
}
