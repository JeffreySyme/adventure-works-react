import { customersInitialState, CustomersState } from './customers'
import { systemInitialState, SystemState } from './system'

export default function () : State {
    return {
        customers: customersInitialState(),
        system: systemInitialState()
    }
}

export interface State {
    customers: CustomersState
    system: SystemState
}
