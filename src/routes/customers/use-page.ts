import { useCallback, useEffect } from 'react'
import { useBreadcrumbs, useHttpGet } from '../../lib/hooks'
import buildQuery from 'odata-query'
import { useAppDispatch, useAppSelector } from '../../store'
import { setCustomers } from './store'

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Customers', to: '/customers' },
    ])
    const data = useAppSelector((state) => state.customers.customers)
    const query = useAppSelector((state) => state.customers.customersQuery)
    const dispatch = useAppDispatch()
    const { httpGet } = useHttpGet()

    const getData = useCallback(async () => {
        const result = await httpGet(`/Customers${buildQuery(query)}`)

        dispatch(setCustomers(result ? {
            data: result.value,
            totalCount: result['@odata.count'],
        } : null))
    }, [query])

    useEffect(() => { data === undefined && getData() }, [getData])

    return {
        data,
        query,
    }
}
