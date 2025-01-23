import { useCallback, useEffect, useState } from 'react'
import { ProductModel, ProductsQuery, QueryResult, useBreadcrumbs, useHttpGet } from '../../lib'
import buildQuery from 'odata-query'

const initialQuery: ProductsQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Products', to: '/products' },
    ])

    const { httpGet } = useHttpGet()
    const [data, setData] = useState<QueryResult<ProductModel> | null>()
    const [query] = useState<ProductsQuery>(initialQuery)

    const getData = useCallback(async () => {
        const result = await httpGet(`/Products${buildQuery(query)}`)

        setData(result ? {
            data: result.value,
            totalCount: result[`@odata.count`],
        } : null)
    }, [query])

    useEffect(() => { getData() }, [getData])
    
    return {
        data,
        query,
    }
}