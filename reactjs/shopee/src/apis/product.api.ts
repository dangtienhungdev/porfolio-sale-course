import { Product, ProductList, ProductListConfig } from '../types/product.type'

import { SuccessResponse } from '../types/utils.type'
import http from '../utils/http.util'

const URL = 'products'

const productApi = {
  getProducts: (param: ProductListConfig) => {
    return http.get<SuccessResponse<ProductList>>(URL, {
      params: param
    })
  },
  getProductDetail: (productId: string) => {
    return http.get<SuccessResponse<Product>>(`${URL}/${productId}`)
  }
}

export default productApi
