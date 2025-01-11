import { getBaseUrl } from '../../base-url'
import { get } from '../../crud'
import { GetProductsParams, GetProductsResult } from './models'

const route = 'Functions/GetProducts'

export function getProducts(parameters: GetProductsParams) {
    return get<GetProductsResult>(`${getBaseUrl()}/${route}`, parameters)
}
