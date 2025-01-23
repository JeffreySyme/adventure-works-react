import { StateAction } from './actions'
import { State } from './state'
import { systemReducer } from './system'

export default function (state: State, action: StateAction): State {
    return {
        system: systemReducer(state.system, action),
    }
}
