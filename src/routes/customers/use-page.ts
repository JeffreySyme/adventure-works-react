import { useCallback, useEffect } from 'react'
import buildQuery from 'odata-query'
import { useBreadcrumbs, useDispatch, useHttpGet, useSelector } from '../../lib'
import { setCustomersQueryResult } from '../../lib/store/customers'

export default function () {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Customers', to: '/customers' },
    ])
    const queryResult = useSelector(state => state.customers.queryResult)
    const query = useSelector(state => state.customers.query)
    const dispatch = useDispatch()
    const { httpGet } = useHttpGet()

    const getData = useCallback(async () => {
        const result = await httpGet(`/Customers${buildQuery(query)}`)

        dispatch(setCustomersQueryResult(
            result ? {
                data: result.value,
                totalCount: result['@odata.count'],
            } : null
        ))
    }, [query])

    useEffect(() => { getData() }, [getData])

    return {
        queryResult,
        query,
    }
}
