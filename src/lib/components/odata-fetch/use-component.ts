import { QueryOptions } from 'odata-query'
import { useCallback, useEffect, useState } from 'react'
import { getBaseUrl } from '../../api/base-url'
import buildQuery from 'odata-query'

export default function(
    name: string,
    query: Partial<QueryOptions<unknown>>,
) {
    const [data, setData] = useState<any>()
    const [status, setStatus] = useState(0)
    const [url] = useState(`${getBaseUrl()}/${name}`)

    const getData = useCallback(async() => {
        const response = await fetch(`${url}${buildQuery(query)}`, {
            method: 'GET',
            credentials: 'include',
        })

        setStatus(response.status)
        setData(await response.json())
    }, [url, query])

    useEffect(() => { getData() }, [getData])

    return {
        data,
        status,
    }
}