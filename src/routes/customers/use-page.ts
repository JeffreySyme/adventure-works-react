import { useCallback, useEffect, useState } from 'react'
import { CustomerModel, CustomersQuery, QueryResult } from '../../lib'
import { useBreadcrumbs } from '../../lib/hooks'
import { getBaseUrl } from '../../lib/api/base-url'
import buildQuery from 'odata-query'

const initialQuery: CustomersQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Customers', to: '/customers' },
    ])
    const { httpGet } = useHttpGet()
    const [data, setData] = useState<QueryResult<CustomerModel> | null>()
    const [query] = useState<CustomersQuery>(initialQuery)

    const getData = useCallback(async () => {
        const result = await httpGet(`/Customers${buildQuery(query)}`)

        setData(result ? {
            data: result.data,
            totalCount: result['@odata.count']
        } : null)
    }, [query])

    useEffect(() => { getData() }, [getData])

    return {
        data,
        query,
    }
}

function useHttpGet() {
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