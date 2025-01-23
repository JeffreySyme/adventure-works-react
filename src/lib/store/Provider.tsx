import { createContext, useReducer } from 'react'
import reducer from './reducer'
import initialState, { State } from './state'
import { StateAction } from './actions'

export const Context = createContext({} as {
    state: State
    dispatch: React.Dispatch<StateAction>
})

export default function ({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState())

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
} 

interface Props {
    children: any
}