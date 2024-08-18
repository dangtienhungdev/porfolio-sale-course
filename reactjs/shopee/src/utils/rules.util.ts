import type { RegisterOptions } from 'react-hook-form'

export type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email không được để trống'
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Email không hợp lệ'
    },
    maxLength: {
      value: 255,
      message: 'Không được nhập quá 255 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Ít nhất 6 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu không được để trống'
    },
    maxLength: {
      value: 255,
      message: 'Không được nhập quá 255 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Ít nhất 6 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Xác nhận mật khẩu không được để trống'
    },
    maxLength: {
      value: 255,
      message: 'Không được nhập quá 255 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Ít nhất 6 ký tự'
    }
  }
}
