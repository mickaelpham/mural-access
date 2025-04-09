import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { Prisma } from '../../generated/prisma'

@Injectable()
export class UserService {
  constructor(
    private readonly idService: IdService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({
    displayName,
    username,
  }: Pick<Prisma.UserCreateInput, 'displayName' | 'username'>) {
    const id = this.idService.generate('user')
    const user = await this.prismaService.user.create({
      data: { id, displayName, username },
    })
    return user
  }
}
