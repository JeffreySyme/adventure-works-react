import { ProductModelModel } from '../../product-models/model'
import { ProductModel } from '../../products'

export interface GetProductsParams {
    productIds: number[]
}
export interface GetProductsResult {
    products: ProductModel[]
    productModels: ProductModelModel[]
}