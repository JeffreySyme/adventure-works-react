import { getBaseUrl } from '../base-url'
import { create, get, query, update } from '../crud'
import { ProductCategoryModel } from './model'
import buildQuery, { QueryOptions } from 'odata-query'

export type ProductCategoriesQuery = Partial<QueryOptions<ProductCategoryModel>>

const productCategories = 'ProductCategories'

export function queryProductCategories(queryOptions: ProductCategoriesQuery) {
    return query<ProductCategoryModel>(`${getBaseUrl()}/${productCategories}${buildQuery(queryOptions)}`)
}
export function findProductCategory(productCategoryId: number) {
    return get<ProductCategoryModel>(`${getBaseUrl()}/${productCategories}/${productCategoryId}`)
}
export function createProductCategory(model: ProductCategoryModel) {
    return create(`${getBaseUrl()}/${productCategories}`, model)
}
export function updateProductCategory(model: ProductCategoryModel) {
    return update(`${getBaseUrl()}/${productCategories}/${model.productCategoryId}`, model)
}
