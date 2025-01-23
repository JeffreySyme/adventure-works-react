import { useCallback, useEffect, useState } from 'react'
import buildQuery from 'odata-query'
import { CustomerModel, QueryResult, useBreadcrumbs, useHttpGet } from '../../lib'

const initialState = {
    skip: 0,
    take: 50,
    count: true,
}

export default function () {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Customers', to: '/customers' },
    ])
    const [data, setData] = useState<QueryResult<CustomerModel> | null>()
    const [query] = useState(initialState)
    const { httpGet } = useHttpGet()

    const getData = useCallback(async () => {
        const result = await httpGet(`/Customers${buildQuery(query)}`)

        setData(result ? {
            data: result.value,
            totalCount: result['@odata.count'],
        } : null)
    }, [query])

    useEffect(() => { getData() }, [getData])

    return {
        data,
        query,
    }
}
