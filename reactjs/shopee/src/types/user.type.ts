export type Role = 'User' | 'Admin'

export interface User {
  roles: Role[]
  _id: string
  email: string
  createdAt: string
  updatedAt: string
}
