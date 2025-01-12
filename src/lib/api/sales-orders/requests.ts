import { getBaseUrl } from '../base-url'
import { get, query } from '../crud'
import { SalesOrderModel } from './model'

const salesOrders = 'SalesOrders'

export function querySalesOrders() {
    return query<SalesOrderModel>(`${getBaseUrl()}/${salesOrders}?$count=true`)
}
export function findSalesOrder(salesOrderId: number) {
    return get<SalesOrderModel>(`${getBaseUrl()}/${salesOrders}/${salesOrderId}`)
}
