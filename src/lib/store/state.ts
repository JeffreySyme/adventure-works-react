import { systemInitialState, SystemState } from './system'

export default function () : State {
    return {
        system: systemInitialState()
    }
}

export interface State {
    system: SystemState
}
