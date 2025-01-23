import { useContext } from 'react'
import { State } from './state'
import { Context } from './Provider'

export default function <TState>(func: (state: State) => TState) {
    const { state } = useContext(Context)

    return func(state)
}