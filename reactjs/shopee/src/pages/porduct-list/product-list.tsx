import Paginate from '../../components/paginate'
import Product from './product'
import { ProductListConfig } from '../../types/product.type'
import SidebarFillter from './sidebar-filter'
import SortProductList from './sort-product-list'
import categoryApi from '../../apis/category.api'
import productApi from '../../apis/product.api'
import { useQuery } from '@tanstack/react-query'
import useQueryConfig from '../../hooks/useQueryConfig'
import { useQueryParams } from '../../hooks/useQueryParams'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

const ProductList = () => {
  const queryParams: QueryConfig = useQueryParams()

  const queryConfig = useQueryConfig()

  const { data: productData } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => productApi.getProducts(queryParams as ProductListConfig),
    keepPreviousData: true
  })

  const { data: categoryData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryApi.getCategories(),
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000
  })

  return (
    <div className='py-6 bg-gray-200'>
      <div className='container'>
        {productData && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <SidebarFillter categories={categoryData?.data.data || []} queryConfig={queryConfig} />
            </div>

            <div className='col-span-9'>
              <SortProductList queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} />

              <div className='grid grid-cols-2 gap-3 mt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {productData?.data?.data?.products?.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>

              <Paginate queryConfig={queryConfig} pageSize={productData.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductList
