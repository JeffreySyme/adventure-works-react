import { httpGet } from '../../http'
import { getBaseUrl } from '../base-url'
import { QueryResult } from '../query-result'
import { CustomerModel } from './model'

export async function queryCustomers() {
    const response = await httpGet(`${getBaseUrl()}/Customers?$count=true`)

    if (!response.ok) {
        throw new Error('An error occurred.')
    }

    const result = await response.json()

    return {
        totalCount: result['@odata.count'],
        data: result['value']
    } as QueryResult<CustomerModel>
}

export async function findCustomer(customerId: number) {
    const response = await httpGet(`${getBaseUrl()}/Customers/${customerId}`)

    if (response.status === 404) {
        return null
    } else if (!response.ok) {
        throw new Error('An error occurred.')
    }
    
    return await response.json() as CustomerModel
}
