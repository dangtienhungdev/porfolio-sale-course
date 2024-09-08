import { Controller, Resolver, useForm } from 'react-hook-form'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { Schema, schema } from '../../../utils/rules.util'

import Button from '../../../components/button'
import { Category } from '../../../types/category.type'
import InputNumber from '../../../components/input-number'
import InputV2 from '../../../components/input-v2'
import { NoUndefinedField } from '../../../types/utils.type'
import { QueryConfig } from '../product-list'
import RatingStar from '../rating-start/rating-start'
import classNames from 'classnames'
import { omit } from 'lodash'
import path from '../../../constants/path'
import { yupResolver } from '@hookform/resolvers/yup'

interface SidebarFillterProps {
  categories: Category[]
  queryConfig: QueryConfig
}

type FormData = NoUndefinedField<Pick<Schema, 'price_max' | 'price_min'>>

const priceSchema = schema.pick(['price_min', 'price_max'])

const SidebarFillter = ({ categories, queryConfig }: SidebarFillterProps) => {
  const navigate = useNavigate()

  const { category } = queryConfig
  const {
    control,
    handleSubmit,
    trigger,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: yupResolver(priceSchema) as Resolver<FormData>
  })

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        price_min: data.price_min,
        price_max: data.price_max
      }).toString()
    })
  })

  const handleRemoteAll = () => {
    navigate({
      pathname: path.home,
      search: createSearchParams(omit(queryConfig, ['price_max', 'price_min', 'rating_filter', 'category'])).toString()
    })
  }

  return (
    <div className='py-4'>
      <Link
        to={path.home}
        className={classNames('flex items-center font-bold', {
          'text-orange': !category
        })}
      >
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
        {categories.map((categoryItem) => {
          const isActive = categoryItem._id === category
          return (
            <li className='py-2 pl-2' key={categoryItem._id}>
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    category: categoryItem._id
                  }).toString()
                }}
                className={classNames('relative px-2', {
                  'font-semibold text-orange': isActive
                })}
              >
                {isActive && (
                  <svg viewBox='0 0 4 7' className='absolute top-1 left-[-10px] h-2 w-2 fill-orange'>
                    <polygon points='4 3.5 0 0 0 7' />
                  </svg>
                )}
                {categoryItem.name}
              </Link>
            </li>
          )
        })}
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

        <form className='mt-2' onSubmit={onSubmit}>
          <div className='flex items-start'>
            {/* <Controller
              control={control}
              name='price_min'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    placeholder='₫ TỪ'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    {...field}
                    onChange={field.onChange}
                    ref={field.ref}
                  />
                )
              }}
            /> */}
            <InputV2
              control={control}
              name='price_min'
              type='number'
              className='grow'
              placeholder='₫ TỪ'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
              classNameError='hidden'
              onChange={() => trigger('price_min')}
            />

            <div className='mx-2 mt-2 shrink-0'>-</div>

            <Controller
              control={control}
              name='price_max'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    placeholder='₫ ĐẾN'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    {...field}
                    onChange={field.onChange}
                    ref={field.ref}
                  />
                )
              }}
            />
          </div>

          <div className='mt-1 min-h-[1.25rem] text-center text-sm text-red-600'>{errors.price_min?.message}</div>

          <Button className='flex items-center justify-center w-full p-2 text-sm text-white uppercase bg-orange hover:bg-orange/80'>
            Áp dụng
          </Button>
        </form>
      </div>

      <div className='my-4 h-[1px] bg-gray-300' />
      <div className='text-sm'>Đánh giá</div>

      <RatingStar queryConfig={queryConfig} />

      <div className='my-4 h-[1px] bg-gray-300' />
      <Button
        onClick={handleRemoteAll}
        className='flex items-center justify-center w-full p-2 text-sm text-white uppercase bg-orange hover:bg-orange/80'
      >
        Xóa tất cả
      </Button>
    </div>
  )
}

export default SidebarFillter
