import { QueryOptions } from 'odata-query'

export interface ProductModel {
    productId: number
    name: string
    productNumber: string
    color: string
    standardCost: number
    listPrice: number
    size: string
    weight: number | null
    productCategoryId: number
    productModelId: number
    sellStartDate: string
    sellEndDate: string | null
    discontinuedDate: string | null
    modifiedDate: string
}

export type ProductsQuery = Partial<QueryOptions<ProductModel>>