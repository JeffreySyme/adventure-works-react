import { CustomersStateAction } from './actions'
import { CustomersState } from './state'

export default function (state: CustomersState, action: CustomersStateAction): CustomersState {
    switch(action.type) {
        case 'SET_CUSTOMERS_QUERY':
            return {
                ...state,
                query: action.payload,
                queryResult: undefined,
            }
        case 'SET_CUSTOMERS_QUERY_RESULT':
            return {
                ...state,
                queryResult: action.payload,
            }
        default:
            return state
    }
}
