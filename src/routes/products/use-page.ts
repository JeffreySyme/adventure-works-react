import { useCallback, useEffect, useState } from 'react'
import { useBreadcrumbs, useTitle } from '../../lib/hooks'
import { ProductModel, ProductsQuery, queryProducts, QueryResult } from '../../lib'

const initialQuery: ProductsQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function() {
    useTitle('Products')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Products', to: '/products' },
    ])

    const [query] = useState<ProductsQuery>(initialQuery)
    const [data, setData] = useState<QueryResult<ProductModel> | null>()

    const getData = useCallback(async () => {
        setData(await queryProducts(query))
    }, [])

    useEffect(() => { getData() }, [getData])

    return {
        data,
    }
}