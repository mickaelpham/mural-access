import { WorkspaceUser, User } from '../../../generated/prisma'

export type WorkspaceUserResponseDto = {
  createdAt: WorkspaceUser['createdAt']
  updatedAt: WorkspaceUser['updatedAt']
  deletedAt: WorkspaceUser['deletedAt']
  role: WorkspaceUser['role']
  userId: User['id']
  userCompanyId: User['companyId']
  username: User['username']
  displayName: User['displayName']
}

export type WorkspaceUserListResponseDto = {
  data: WorkspaceUserResponseDto[]
  hasMore: boolean
  size: number
}
