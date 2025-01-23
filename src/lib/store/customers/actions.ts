import { CustomerModel, CustomersQuery, QueryResult } from '../../api'

export type CustomersStateAction =
| { type: 'SET_CUSTOMERS_QUERY', payload: CustomersQuery }
| { type: 'SET_CUSTOMERS_QUERY_RESULT', payload?: QueryResult<CustomerModel> | null }


export function setCustomersQuery(payload: CustomersQuery): CustomersStateAction {
    return { type: 'SET_CUSTOMERS_QUERY', payload }
}

export function setCustomersQueryResult(payload?: QueryResult<CustomerModel> | null): CustomersStateAction {
    return { type: 'SET_CUSTOMERS_QUERY_RESULT', payload }
}
