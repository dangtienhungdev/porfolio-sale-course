import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { rules } from '../../utils/rules.util'

interface FormData {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  id='email'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  {...register('email', rules.email)}
                />
                <div className='mt-1 text-sm text-red-600'>Email không khớp</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 text-sm text-red-600'>Password không khớp</div>
              </div>

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
