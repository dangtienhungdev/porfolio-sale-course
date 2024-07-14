import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm'>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                />
                <div className='mt-1 text-red-600 text-sm'>Email không khớp</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                />
                <div className='mt-1 text-red-600 text-sm'>Password không khớp</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='confirm_password'
                  id='confirm_password'
                  placeholder='Confirm password'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                />
                <div className='mt-1 text-red-600 text-sm'>Confirm password không khớp</div>
              </div>

              <div className='mt-3'>
                <button className='w-full text-center py-4 uppercase px-2 bg-red-500 text-white rounded-sm'>
                  Đăng ký
                </button>
              </div>

              <div className='flex items-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn đã có tài khoản hay chưa? </span>
                <Link to={'/login'} className='text-orange ml-1'>
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
