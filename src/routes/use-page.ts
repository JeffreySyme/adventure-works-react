import { useCallback, useEffect } from 'react'
import { useAppDispatch } from '../store'
import { setBreadcrumbs } from './store'

export default function usePage() {
    const dispatch = useAppDispatch()

    const updateBreadcrumbs = useCallback(() => {
        dispatch(setBreadcrumbs([
            {
                active: true,
                text: 'Home',
                to: '/',
            }
        ]))
    }, [dispatch])
    
    useEffect(() => { updateBreadcrumbs() }, [updateBreadcrumbs])
    useEffect(() => {
        document.title = 'Adventure Works - Home' 
    }, [])
}
