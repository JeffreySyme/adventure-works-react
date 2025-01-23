import { QueryOptions } from 'odata-query'

export interface ProductCategoryModel {
    productCategoryId: number
    parentProductCategoryId: number | null
    name: string
    modifiedDate: string
}

export type ProductCategoriesQuery = Partial<QueryOptions<ProductCategoryModel>>