import buildQuery, { QueryOptions } from 'odata-query'
import { getBaseUrl } from '../base-url'
import { get, query } from '../crud'
import { CustomerModel } from './model'

export type CustomersQuery = Partial<QueryOptions<CustomerModel>>

const customers = 'Customers'

export function queryCustomers(queryRequest: CustomersQuery) {
    return query<CustomerModel>(`${getBaseUrl()}/${customers}${buildQuery(queryRequest)}`)
}

export function findCustomer(customerId: number) {
    return get<CustomerModel>(`${getBaseUrl()}/${customers}/${customerId}`) 
}
