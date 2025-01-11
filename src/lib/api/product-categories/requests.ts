import { getBaseUrl } from '../base-url'
import { get, query } from '../crud'
import { ProductCategoryModel } from './model'

export function queryProductCategories() {
    return query<ProductCategoryModel>(`${getBaseUrl()}/ProductCategories?$count=true`)
}

export function findProductCategory(productCategoryId: number) {
    return get<ProductCategoryModel>(`${getBaseUrl()}/ProductCategories/${productCategoryId}`)
}