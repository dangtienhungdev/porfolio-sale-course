import { Schema, loginSchema } from '../../utils/rules.util'

import Input from '../../components/input'
import { Link } from 'react-router-dom'
import { ResponseApi } from '../../types/utils.type'
import { isAxiosUnprocessableEntity } from '../../utils/utils'
import { loginAccount } from '../../apis/auth.api'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = Omit<Schema, 'confirm_password'>

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => loginAccount(body)
  })

  const onSubmit = (data: FormData) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log('🚀 ~ onSubmit ~ data:', data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ResponseApi<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  }

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='flex flex-col gap-6 p-10 bg-white rounded shadow-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                name='email'
                type='email'
                placeholder='Email'
                errorMessage={errors.email?.message}
                register={register}
              />
              <Input
                name='password'
                type='password'
                placeholder='Password'
                errorMessage={errors.password?.message}
                register={register}
              />

              <div className='mt-3'>
                <button className='w-full px-2 py-4 text-center text-white uppercase bg-red-500 rounded-sm'>
                  Đăng nhập
                </button>
              </div>

              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn chưa có tài khoản hay chưa? </span>
                <Link to={'/register'} className='ml-1 text-orange'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
