export interface Student {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  country: string
  avatar: string
  btc_address: string
}

export type TStudents = Pick<Student, 'id' | 'avatar' | 'email' | 'last_name'>
