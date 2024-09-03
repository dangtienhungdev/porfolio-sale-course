export interface ProductList {
  products: Product[]
  pagination: Pagination
}

export interface Pagination {
  page: number
  limit: number
  page_size: number
}

export interface Product {
  _id: string
  images: string[]
  price: number
  rating: number
  price_before_discount: number
  quantity: number
  sold: number
  view: number
  name: string
  category: {
    _id: string
    name: string
  }
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface ProductListConfig {
  page?: number
  limit?: number
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price'
  order?: 'asc' | 'desc'
  exclude?: string
  rating_filter?: number
  price_min?: number
  price_max?: number
  name?: string
}
