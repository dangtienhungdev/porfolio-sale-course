import Button from '../../../components/button'
import { Link } from 'react-router-dom'
import RatingStar from '../rating-start/rating-start'
import path from '../../../constants/path'

const SidebarFillter = () => {
  return (
    <div className='py-4'>
      <Link to={path.home} className={'flex items-center font-bold'}>
        <svg viewBox='0 0 12 10' className='w-3 h-4 mr-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth={1}>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' />
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục sản phẩm
      </Link>

      <div className='my-4 h-[1px] bg-gray-300' />

      <ul>
        <li className='py-2 pl-2'>
          {Array.from({ length: 10 }).map((_, index) => (
            <Link to={''} key={index} className={'relative px-2'}>
              Sản phẩm mới {index}
            </Link>
          ))}
        </li>
      </ul>

      <Link to={path.home} className='flex items-center mt-4 font-bold uppercase'>
        <svg
          enableBackground='new 0 0 15 15'
          viewBox='0 0 15 15'
          x={0}
          y={0}
          className='w-3 h-4 mr-3 fill-current stroke-current'
        >
          <g>
            <polyline
              fill='none'
              points='5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeMiterlimit={10}
            />
          </g>
        </svg>
        Bộ lọc sản phẩm
      </Link>

      <div className='my-4 h-[1px] bg-gray-300' />

      <div className='my-5'>
        <div>Khoảng giá</div>

        <form className='mt-2'>
          <div className='flex items-start'></div>

          <Button className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'>
            Áp dụng
          </Button>
        </form>
      </div>

      <div className='my-4 h-[1px] bg-gray-300' />
      <div className='text-sm'>Đánh giá</div>

      <RatingStar />

      <div className='my-4 h-[1px] bg-gray-300' />
      <Button className='flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80'>
        Xóa tất cả
      </Button>
    </div>
  )
}

export default SidebarFillter
