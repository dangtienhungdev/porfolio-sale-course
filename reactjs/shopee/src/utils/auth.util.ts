export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}

export const clearAccessTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('access_token') || ''
}
