import { getBaseUrl } from '../base-url'
import { create, get, query, update } from '../crud'
import { ProductModel } from './model'

const products = 'Products'

export function queryProducts() {
    return query<ProductModel>(`${getBaseUrl()}/${products}?$count=true`)
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
