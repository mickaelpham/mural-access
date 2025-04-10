import { User, WorkspaceUser } from '../../../generated/prisma'

export type WorkspaceUserDto = {
  createdAt: WorkspaceUser['createdAt']
  updatedAt: WorkspaceUser['updatedAt']
  deletedAt: WorkspaceUser['deletedAt']
  role: WorkspaceUser['role']
  userId: User['id']
  userCompanyId: User['companyId']
  username: User['username']
  displayName: User['displayName']
}

type Params = {
  createdAt: WorkspaceUser['createdAt']
  updatedAt: WorkspaceUser['updatedAt']
  deletedAt: WorkspaceUser['deletedAt']
  role: WorkspaceUser['role']
  user: {
    id: User['id']
    companyId: User['companyId']
    username: User['username']
    displayName: User['displayName']
  }
}

export function serializeWorkspaceUser(data: Params): WorkspaceUserDto {
  return {
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    deletedAt: data.deletedAt,
    role: data.role,
    userId: data.user.id,
    userCompanyId: data.user.companyId,
    username: data.user.username,
    displayName: data.user.displayName,
  }
}
