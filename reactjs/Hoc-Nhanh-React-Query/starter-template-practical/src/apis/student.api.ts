import { AxiosResponse } from 'axios'
import { TStudents } from 'types/student.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string): Promise<AxiosResponse> => {
  return http.get<TStudents>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
}
