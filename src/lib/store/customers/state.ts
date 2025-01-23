import { CustomerModel, CustomersQuery, QueryResult } from '../../api'

export default function (): CustomersState {
    return {
        query: {
            skip: 0,
            top: 200,
            count: true,
        }
    }
}

export interface CustomersState {
    query: CustomersQuery
    queryResult?: QueryResult<CustomerModel> | null
}
