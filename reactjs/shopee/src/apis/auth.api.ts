import { AuthResponse } from '../types/auth.type'
import http from '../utils/http.util'

export const authApi = {
  registerAccount: (body: { email: string; password: string }) => {
    return http.post<AuthResponse>('/register', body)
  },
  loginAccount: (body: { email: string; password: string }) => {
    return http.post<AuthResponse>('/login', body)
  },
  logoutAccount: () => {
    return http.post('/logout')
  }
}

export default authApi
