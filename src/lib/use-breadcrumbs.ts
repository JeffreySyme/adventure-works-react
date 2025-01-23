import { useCallback, useEffect, useState } from 'react'
import { Breadcrumb, setBreadcrumbs, useDispatch } from './store'

export default function (items: Breadcrumb[]) {
    // Keep a static reference so the effect doesn't infinite loop.
    const [breadcrumbs] = useState(items)
    const dispatch = useDispatch()

    const updateBreadcrumbs = useCallback(() => {
        dispatch(setBreadcrumbs(breadcrumbs))
    }, [breadcrumbs])

    useEffect(() => updateBreadcrumbs(), [updateBreadcrumbs])
}
