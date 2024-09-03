import { isUndefined, omitBy } from 'lodash'

import Paginate from '../../components/paginate'
import Product from './product'
import { ProductListConfig } from '../../types/product.type'
import SidebarFillter from './sidebar-filter'
import SortProductList from './sort-product-list'
import productApi from '../../apis/product.api'
import { useQuery } from '@tanstack/react-query'
import { useQueryParams } from '../../hooks/useQueryParams'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

const ProductList = () => {
  const queryParams: QueryConfig = useQueryParams()

  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page ?? '1',
      limit: queryParams.limit ?? 20,
      sort_by: queryParams.sort_by,
      order: queryParams.order,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter
    },
    isUndefined
  )

  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => productApi.getProducts(queryParams as ProductListConfig),
    keepPreviousData: true
  })

  return (
    <div className='py-6 bg-gray-200'>
      <div className='container'>
        {data && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <SidebarFillter />
            </div>

            <div className='col-span-9'>
              <SortProductList queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />

              <div className='grid grid-cols-2 gap-3 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {data?.data?.data?.products?.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>

              <Paginate queryConfig={queryConfig} pageSize={data.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
