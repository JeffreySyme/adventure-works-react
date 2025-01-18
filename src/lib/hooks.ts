import { useEffect, useState } from 'react'
import {
    BreadcrumbLink,
    setBreadcrumbs,
} from '../routes/store'
import { useAppDispatch } from '../store'

export function useBreadcrumbs(items: BreadcrumbLink[]) {
    // Keep a static reference so the effect doesn't infinite loop.
    const [breadcrumbs] = useState(items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setBreadcrumbs(breadcrumbs))
    }, [breadcrumbs, dispatch])
}
