import Product from './product'
import SidebarFillter from './sidebar-filter'
import SortProductList from './sort-product-list'

const ProductList = () => {
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
              <div className='col-span-1'>
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
