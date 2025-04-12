import { Test, TestingModule } from '@nestjs/testing'
import { GroupWorkspaceService } from './group-workspace.service'

describe('GroupWorkspaceService', () => {
  let service: GroupWorkspaceService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupWorkspaceService],
    }).compile()

    service = module.get<GroupWorkspaceService>(GroupWorkspaceService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
