import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import {
  clearLS,
  getAccessTokenFromLocalStorage,
  setAccessTokenToLocalStorage,
  setProfileToLocalStorage
} from './auth.util'

import { AuthResponse } from '../types/auth.type'
import path from '../constants/path'
import { toast } from 'react-toastify'

class Http {
  instance: AxiosInstance
  private accountToken: string

  constructor() {
    this.accountToken = getAccessTokenFromLocalStorage()

    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accountToken) {
          config.headers.Authorization = `${this.accountToken}`
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // add interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === path.login || url === path.register) {
          const data = response.data as AuthResponse
          this.accountToken = data.data.access_token
          setAccessTokenToLocalStorage(this.accountToken)
          setProfileToLocalStorage(data.data.user)
        } else if (url === path.logout) {
          this.accountToken = ''
          clearLS()
        }

        return response
      },
      function (error: AxiosError) {
        if (error.response?.status === HttpStatusCode.UnprocessableEntity) {
          const message = (error.response.data as any).message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
