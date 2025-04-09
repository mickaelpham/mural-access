import { Injectable } from '@nestjs/common'
import { IdService } from '../data/id.service'
import { PrismaService } from '../data/prisma.service'
import { User } from '../../generated/prisma'

@Injectable()
export class UserService {
  constructor(
    private readonly idService: IdService,
    private readonly prismaService: PrismaService,
  ) {}

  async create({
    companyId,
    displayName,
    username,
  }: Pick<User, 'displayName' | 'username' | 'companyId'>) {
    const id = this.idService.generate('user')
    const user = await this.prismaService.user.create({
      data: { id, displayName, username, companyId },
    })
    return user
  }

  async getById(id: User['id']) {
    return await this.prismaService.user.findUnique({ where: { id } })
  }
}
