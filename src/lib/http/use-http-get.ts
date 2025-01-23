import { useCallback } from 'react'
import { getBaseUrl } from '../api/base-url'

export default function() {
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
