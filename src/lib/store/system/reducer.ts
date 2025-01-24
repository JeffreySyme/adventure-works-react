import { SystemStateAction } from './actions'
import { SystemState } from './state'


export default function (state: SystemState, action: SystemStateAction): SystemState {
    switch (action.type) {
        case 'SET_BREADCRUMBS':
            return {
                ...state,
                breadcrumbs: action.payload,
            }
        case 'SET_SETTINGS':
            return {
                ...state,
                settings: action.payload,
            }
        default:
            return state
    }
}
