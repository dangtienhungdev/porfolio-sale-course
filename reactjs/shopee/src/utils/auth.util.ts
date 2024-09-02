import { User } from '../types/user.type'

export const setAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('access_token') ?? ''
}

export const getProfileFromLocalStorage = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const setProfileToLocalStorage = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
