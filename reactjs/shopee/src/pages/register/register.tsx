import { Link, useNavigate } from 'react-router-dom'
import { Schema, schema } from '../../utils/rules.util'

import { AppContext } from '../../contexts/app.context'
import Button from '../../components/button'
import { ErrorResponse } from '../../types/utils.type'
import Input from '../../components/input'
import _ from 'lodash'
import { isAxiosUnprocessableEntity } from '../../utils/utils'
import path from '../../constants/path'
import { registerAccount } from '../../apis/auth.api'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = Schema

const Register = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = (data: FormData) => {
    const body = _.omit(data, 'confirm_password')
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
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
              <div className='text-2xl'>Đăng ký</div>
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

              <Input
                name='confirm_password'
                type='password'
                placeholder='Confirm Password'
                errorMessage={errors.confirm_password?.message}
                register={register}
              />

              <div className='mt-3'>
                <Button
                  isLoading={registerAccountMutation.isLoading}
                  disabled={registerAccountMutation.isLoading}
                  className='flex items-center justify-center w-full px-2 py-4 text-sm text-white uppercase bg-red-500 hover:bg-red-600'
                >
                  Đăng ký
                </Button>
              </div>

              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn đã có tài khoản hay chưa? </span>
                <Link to={path.login} className='ml-1 text-orange'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
