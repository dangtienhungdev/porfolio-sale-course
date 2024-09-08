import { Purchase, PurchaseListStatus } from '../types/purchase.type'

import { SuccessResponse } from '../types/utils.type'
import http from '../utils/http.util'

const URL = 'purchases'

const purchaseApi = {
  addToCart: (body: { product_id: string; buy_count: number }) => {
    return http.post<SuccessResponse<Purchase>>(`${URL}/add-to-cart`, body)
  },
  getPurchaseList: (params: { status: PurchaseListStatus }) => {
    return http.get<SuccessResponse<Purchase[]>>(`${URL}`, { params })
  }
}

export default purchaseApi
