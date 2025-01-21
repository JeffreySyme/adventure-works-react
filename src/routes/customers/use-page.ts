import { useCallback, useEffect, useState } from 'react'
import { CustomerModel, CustomersQuery, QueryResult } from '../../lib'
import { useBreadcrumbs, useHttpGet } from '../../lib/hooks'
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
            data: result.value,
            totalCount: result['@odata.count']
        } : null)
    }, [query])

    useEffect(() => { getData() }, [getData])

    return {
        data,
        query,
    }
}
