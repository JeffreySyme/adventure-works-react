import { createContext } from 'react'
import { State } from './state'
import { StateAction } from './actions'

export interface StoreContext {
    state: State
    dispatch: React.Dispatch<StateAction>
}

export const StoreContext = createContext({} as StoreContext)
