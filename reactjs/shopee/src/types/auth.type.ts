import { SuccessResponse } from './utils.type'
import { User } from './user.type'

export type AuthResponse = SuccessResponse<{
  access_token: string
  expires: number
  refresh_token: string
  expires_refresh_token: number
  user: User
}>
