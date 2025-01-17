import { QueryOptions } from 'odata-query'
import { getBaseUrl } from '../base-url'
import { create, get, query, update } from '../crud'
import { ProductModel } from './model'

const products = 'Products'

export type ProductsQuery = Partial<QueryOptions<ProductModel>>

export function queryProducts(queryRequest: ProductsQuery) {
    return query<ProductModel>(`${getBaseUrl()}/${products}${queryRequest}`)
}

export function findProduct(productId: number) {
    return get<ProductModel>(`${getBaseUrl()}/${products}/${productId}`)
}

export function createProduct(product: ProductModel) {
    return create<ProductModel>(`${getBaseUrl()}/${products}`, product)
}

export function updateProduct(product: ProductModel) {
    return update<ProductModel>(`${getBaseUrl()}/${products}/${product.productId}`, product)
}
