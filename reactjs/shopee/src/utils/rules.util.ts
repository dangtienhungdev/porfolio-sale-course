import * as yup from 'yup'

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

function testPriceMinMax(this: yup.TestContext<yup.AnyObject>) {
  const { price_min, price_max } = this.parent as { price_min: string; price_max: string }

  if (price_min !== '' && price_max !== '') {
    return Number(price_min) <= Number(price_max)
  }
  return price_min !== '' || price_max !== ''
}

export const schema = yup.object({
  email: yup
    .string()
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 - 160 ký tự')
    .max(160, 'Độ dài từ 5 - 160 ký tự'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6 - 160 ký tự')
    .max(160, 'Độ dài từ 6 - 160 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  price_min: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không hợp lệ',
    test: testPriceMinMax
  }),
  price_max: yup.string().test({
    name: 'price-not-allowed',
    message: 'Giá không hợp lệ',
    test: testPriceMinMax
  })
})

export const loginSchema = schema.omit(['confirm_password'])

export type LoginSchema = yup.InferType<typeof loginSchema>
export type Schema = yup.InferType<typeof schema>
