import { StateAction } from './actions'
import { customersReducer } from './customers'
import { State } from './state'
import { systemReducer } from './system'

export default function (state: State, action: StateAction): State {
    return {
        customers: customersReducer(state.customers, action),
        system: systemReducer(state.system, action),
    }
}
