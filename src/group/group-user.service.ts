import { Injectable } from '@nestjs/common'
import { OpenFgaService } from '../data/open-fga.service'
import { PrismaService } from '../data/prisma.service'
import { Group, Prisma, User } from '../../generated/prisma'
import { PatchGroupUserRequestDto } from './dto/patch-group-user-request.dto'
import { TupleKey, TupleKeyWithoutCondition } from '@openfga/sdk'

@Injectable()
export class GroupUserService {
  constructor(
    private readonly openFgaService: OpenFgaService,
    private readonly prismaService: PrismaService,
  ) {}

  async updateUsers(groupId: Group['id'], dto: PatchGroupUserRequestDto) {
    const addList: Prisma.GroupUserCreateManyInput[] = []
    const removeList: Array<User['id']> = []
    const writeTuples: TupleKey[] = []
    const deleteTuples: TupleKeyWithoutCondition[] = []

    for (const op of dto) {
      switch (op.operation) {
        case 'add':
          addList.push({
            groupId,
            userId: op.userId,
          })

          writeTuples.push({
            user: `user:${op.userId}`,
            relation: 'member',
            object: `group:${groupId}`,
          })
          break
        case 'remove':
          removeList.push(op.userId)

          deleteTuples.push({
            user: `user:${op.userId}`,
            relation: 'member',
            object: `group:${groupId}`,
          })
          break
      }
    }

    await this.prismaService.groupUser.createMany({ data: addList })

    const now = new Date()
    await this.prismaService.groupUser.updateMany({
      where: { groupId, userId: { in: removeList } },
      data: { deletedAt: now, updatedAt: now },
    })

    await this.openFgaService.write({
      writes: writeTuples,
      deletes: deleteTuples,
    })
  }
}
