import { useEffect, useState } from 'react'
import {
    BreadcrumbLink,
    setBreadcrumbs,
} from '../routes/store'
import { useAppDispatch } from '../store'

export function useBreadcrumbs(items: BreadcrumbLink[]) {
    const [breadcrumbs] = useState(items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setBreadcrumbs(breadcrumbs))
    }, [breadcrumbs, dispatch])
}

export function useTitle(title: string) {
    useEffect(() => {
        document.title = `Adventure Works - ${title}`
    }, [title])
}