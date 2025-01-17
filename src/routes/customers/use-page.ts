import { useCallback, useEffect, useState } from 'react'
import { CustomerModel, CustomersQuery, queryCustomers, QueryResult } from '../../lib'
import { useBreadcrumbs, useTitle } from '../../lib/hooks'

const initialQuery: CustomersQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function usePage() {
    useTitle('Customers')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Customers', to: '/customers' },
    ])

    const [data, setData] = useState<QueryResult<CustomerModel> | null>()
    const [query] = useState<CustomersQuery>(initialQuery)

    const getData = useCallback(async () => {
        setData(await queryCustomers(query))
    }, [query])

    useEffect(() => { getData() }, [getData])

    return {
        data,
    }
}
