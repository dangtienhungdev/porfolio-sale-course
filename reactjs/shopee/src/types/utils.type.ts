export interface ErrorResponse<Data> {
  message: string
  data?: Data
}

export interface SuccessResponse<Data> {
  message: string
  data: Data
}

// cú pháp loại bỏ options undefined
export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}
