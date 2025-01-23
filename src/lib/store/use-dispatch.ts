import { useContext } from 'react'
import { Context } from './Provider'

export default function () {
    const { dispatch } = useContext(Context)

    return dispatch
}