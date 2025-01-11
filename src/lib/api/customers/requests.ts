import { getBaseUrl } from '../base-url'
import { get, query } from '../crud'
import { CustomerModel } from './model'

export function queryCustomers() {
    return query<CustomerModel>(`${getBaseUrl()}/Customers?$count=true`)
}

export function findCustomer(customerId: number) {
    return get<CustomerModel>(`${getBaseUrl()}/Customers/${customerId}`) 
}
