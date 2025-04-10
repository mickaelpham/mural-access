import { PrismaClient } from '../generated/prisma'
import { IdService } from '../src/data/id.service'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  const idService = new IdService()
  idService.onModuleInit()

  const company = await prisma.company.create({
    data: { id: idService.generate('company'), name: faker.company.name() },
  })
  console.log(`created company ${company.id}`)

  // in that company, create some users
  const users = await prisma.user.createManyAndReturn({
    data: Array.from({ length: 123 }, () => ({
      companyId: company.id,
      id: idService.generate('user'),
      username: faker.internet.username(),
      displayName: faker.person.fullName(),
    })),
  })

  // create a member group for those users
  const memberGroup = await prisma.group.create({
    data: {
      id: idService.generate('group'),
      name: 'Members',
      companyId: company.id,
    },
  })

  // add the users to that group
  await prisma.groupUser.createMany({
    data: users.map((user) => ({ groupId: memberGroup.id, userId: user.id })),
  })

  // create another group of company users
  const adminUsers = await prisma.user.createManyAndReturn({
    data: Array.from({ length: 5 }, () => ({
      companyId: company.id,
      id: idService.generate('user'),
      username: faker.internet.username(),
      displayName: faker.person.fullName(),
    })),
  })

  const adminGroup = await prisma.group.create({
    data: {
      id: idService.generate('group'),
      name: 'Admins',
      companyId: company.id,
    },
  })

  await prisma.groupUser.createMany({
    data: adminUsers.map((user) => ({
      groupId: adminGroup.id,
      userId: user.id,
    })),
  })

  // now create a few workspaces for that company
  const workspaces = await prisma.workspace.createManyAndReturn({
    data: Array.from({ length: 25 }, () => ({
      id: idService.generate('workspace'),
      companyId: company.id,
      name: faker.word.words({ count: 4 }),
    })),
  })

  // map these workspaces to each group
  await prisma.groupWorkspace.createMany({
    data: [
      ...workspaces.flatMap((workspace) => [
        {
          workspaceId: workspace.id,
          groupId: adminGroup.id,
          role: 'ADMIN' as const,
        },
        {
          workspaceId: workspace.id,
          groupId: memberGroup.id,
          role: 'MEMBER' as const,
        },
      ]),
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
