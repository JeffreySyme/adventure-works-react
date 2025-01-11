import { getBaseUrl } from '../base-url'
import { create, get, query, update } from '../crud'
import { ProductCategoryModel } from './model'

const productCategories = 'ProductCategories'

export function queryProductCategories() {
    return query<ProductCategoryModel>(`${getBaseUrl()}/${productCategories}?$count=true`)
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
