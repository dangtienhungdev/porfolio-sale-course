import Paginate from '../../components/paginate'
import Product from './product'
import SidebarFillter from './sidebar-filter'
import SortProductList from './sort-product-list'
import productApi from '../../apis/product.api'
import { useQuery } from '@tanstack/react-query'
import { useQueryParams } from '../../hooks/useQueryParams'
import { useState } from 'react'

const ProductList = () => {
  const queryParams = useQueryParams()

  const [page, setPage] = useState<number>(1)

  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => productApi.getProducts(queryParams)
  })
  console.log('🚀 ~ ProductList ~ data:', data)

  return (
    <div className='py-6 bg-gray-200'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <SidebarFillter />
          </div>

          <div className='col-span-9'>
            <SortProductList />

            <div className='grid grid-cols-2 gap-3 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              {data?.data?.data?.products?.map((product) => (
                <div className='col-span-1' key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>

            <Paginate page={page} setPage={setPage} pageSize={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
