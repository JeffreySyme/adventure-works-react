import { getBaseUrl } from '../base-url'
import { get, query } from '../crud'
import { CustomerModel } from './model'

const customers = 'Customers'

export function queryCustomers() {
    return query<CustomerModel>(`${getBaseUrl()}/${customers}?$count=true`)
}

export function findCustomer(customerId: number) {
    return get<CustomerModel>(`${getBaseUrl()}/${customers}/${customerId}`) 
}
