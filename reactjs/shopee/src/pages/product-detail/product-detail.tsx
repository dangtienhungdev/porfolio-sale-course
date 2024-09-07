import { ProductListConfig, Product as ProductType } from '../../types/product.type'
import { formatCurrency, formatNumberToSocialStyle, getIdFromNameId, rateSale } from '../../utils/utils'
import { useEffect, useMemo, useState } from 'react'

import DOMPurify from 'dompurify'
import Product from '../porduct-list/product'
import ProductRating from '../../components/product-rating'
import productApi from '../../apis/product.api'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const ProductDetail = () => {
  const { nameId } = useParams()
  const id = getIdFromNameId(nameId as string)

  // call api để lấy thông tin sản phẩm
  const { data: productDetailData } = useQuery({
    queryKey: ['product', id],
    queryFn: () => productApi.getProductDetail(id)
  })

  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [isActiveImage, setIsActiveImage] = useState('')

  // lấy thông tin sản phẩm
  const product = productDetailData?.data.data
  const currentImages = useMemo(() => {
    return product ? product.images.slice(...currentIndexImages) : []
  }, [product, currentIndexImages])

  const queryConfig: ProductListConfig = { limit: 20, page: 1, category: product?.category?._id }

  const { data: productsData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => productApi.getProducts(queryConfig),
    enabled: !!product,
    staleTime: 3 * 60 * 1000
  })

  useEffect(() => {
    if (product && product.images.length > 0) {
      setIsActiveImage(product.images[0])
    }
  }, [product])

  const chooseImage = (img: string) => {
    setIsActiveImage(img)
  }

  const next = () => {
    if (currentIndexImages[1] < (product as ProductType).images.length) {
      setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const prev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  if (!product) return null

  return (
    <div className='py-6 bg-gray-200'>
      <div className='container'>
        <div className='p-4 bg-white shadow'>
          <div className='grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div className='relative w-full cursor-zoom-in overflow-hidden pt-[100%] shadow'>
                <img
                  src={isActiveImage}
                  alt={product?.name}
                  className='absolute top-0 left-0 object-cover w-full h-full bg-white'
                />
              </div>
              <div className='relative grid grid-cols-5 gap-1 mt-4'>
                <button
                  onClick={next}
                  className='absolute left-0 z-10 w-5 text-white -translate-y-1/2 top-1/2 h-9 bg-black/20'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                  </svg>
                </button>
                {currentImages.map((img: string, index: number) => {
                  const isActive = index === 0
                  return (
                    <div
                      className='relative w-full pt-[100%]'
                      key={img}
                      onMouseEnter={() => chooseImage(img)}
                      aria-hidden={true}
                    >
                      <img
                        src={img}
                        alt={product?.name}
                        className='absolute top-0 left-0 object-cover w-full h-full bg-white cursor-pointer'
                      />
                      {isActive && <div className='absolute inset-0 border-2 border-orange' />}
                    </div>
                  )
                })}
                <button
                  onClick={prev}
                  className='absolute right-0 z-10 w-5 text-white -translate-y-1/2 top-1/2 h-9 bg-black/20'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-xl font-medium uppercase'>{product?.name}</h1>
              <div className='flex items-center mt-8'>
                <div className='flex items-center'>
                  <span className='mr-1 border-b border-b-orange text-orange'>{product?.rating}</span>
                  <ProductRating
                    rating={product.rating}
                    activeClassname='fill-orange text-orange h-4 w-4'
                    nonActiveClassname='fill-gray-300 text-gray-300 h-4 w-4'
                  />
                </div>
                <div className='mx-4 h-4 w-[1px] bg-gray-300'></div>
                <div>
                  <span>{formatNumberToSocialStyle(product.sold)}</span>
                  <span className='ml-1 text-gray-500'>Đã bán</span>
                </div>
              </div>
              <div className='flex items-center px-5 py-4 mt-8 bg-gray-50'>
                <div className='text-gray-500 line-through'>₫{formatCurrency(product.price_before_discount)}</div>
                <div className='ml-3 text-3xl font-medium text-orange'>₫{formatCurrency(product.price)}</div>
                <div className='ml-4 rounded-sm bg-orange px-1 py-[2px] text-xs font-semibold uppercase text-white'>
                  {rateSale(product.price_before_discount, product.price)}
                </div>
              </div>
              <div className='flex items-center mt-8'>
                <div className='text-gray-500 capitalize'>Số lượng</div>
                {/* <QuantityController
                  onDecrease={handleBuyCount}
                  onIncrease={handleBuyCount}
                  onType={handleBuyCount}
                  value={buyCount}
                  max={product.quantity}
                /> */}
                <div className='ml-6 text-sm text-gray-500'>Còn 10 sản phẩm</div>
              </div>
              <div className='flex items-center mt-8'>
                <button className='flex items-center justify-center h-12 px-5 capitalize border rounded-sm shadow-sm border-orange bg-orange/10 text-orange hover:bg-orange/5'>
                  <svg
                    enableBackground='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='mr-[10px] h-5 w-5 fill-current stroke-orange text-orange'
                  >
                    <g>
                      <g>
                        <polyline
                          fill='none'
                          points='.5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeMiterlimit={10}
                        />
                        <circle cx={6} cy='13.5' r={1} stroke='none' />
                        <circle cx='11.5' cy='13.5' r={1} stroke='none' />
                      </g>
                      <line fill='none' strokeLinecap='round' strokeMiterlimit={10} x1='7.5' x2='10.5' y1={7} y2={7} />
                      <line fill='none' strokeLinecap='round' strokeMiterlimit={10} x1={9} x2={9} y1='8.5' y2='5.5' />
                    </g>
                  </svg>
                  Thêm vào giỏ hàng
                </button>
                <button className='fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm outline-none hover:bg-orange/90'>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <div className='container'>
          <div className='p-4 bg-white shadow '>
            <div className='p-4 text-lg capitalize rounded bg-gray-50 text-slate-700'>Mô tả sản phẩm</div>
            <div className='mx-4 mt-12 mb-4 text-sm leading-loose'>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(product.description)
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <div className='container'>
          <div className='text-gray-400 uppercase'>CÓ THỂ BẠN CŨNG THÍCH</div>
          {productsData && (
            <div className='grid grid-cols-2 gap-3 mt-6 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
              {productsData.data.data.products.map((product) => (
                <div className='col-span-1' key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
