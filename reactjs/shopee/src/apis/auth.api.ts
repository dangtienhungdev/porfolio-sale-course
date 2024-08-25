import { AuthResponse } from '../types/auth.type'
import http from '../utils/http.util'

export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/register', body)
}
