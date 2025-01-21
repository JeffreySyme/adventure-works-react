import { useCallback, useEffect, useState } from 'react'
import {
    BreadcrumbLink,
    setBreadcrumbs,
} from '../routes/store'
import { useAppDispatch } from '../store'
import { getBaseUrl } from './api/base-url'

export function useBreadcrumbs(items: BreadcrumbLink[]) {
    // Keep a static reference so the effect doesn't infinite loop.
    const [breadcrumbs] = useState(items)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setBreadcrumbs(breadcrumbs))
    }, [breadcrumbs, dispatch])
}

export function useHttpGet() {
    // If using a token for security grab it from the store

    const httpGet = useCallback(async (url: string): Promise<any | null> => {
        const response = await fetch(`${getBaseUrl()}${url}`, {
            credentials: 'include',
            method: 'GET',
        })

        if (!response.ok) {
            return null
        }

        return await response.json()
    }, [])

    return {
        httpGet,
    }
}