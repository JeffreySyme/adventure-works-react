import { useCallback, useEffect, useState } from 'react'
import { ProductCategoriesQuery, ProductCategoryModel, QueryResult } from '../../lib'
import { useBreadcrumbs, useHttpGet } from '../../lib/hooks'
import buildQuery from 'odata-query'

const initialQuery: ProductCategoriesQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Product Categories', to: '/product-categories'},
    ])

    const { httpGet } = useHttpGet()
    const [data, setData] = useState<QueryResult<ProductCategoryModel> | null>()
    const [query] = useState<ProductCategoriesQuery>(initialQuery)

    const getData = useCallback(async () => {
        const result = await httpGet(`/ProductCategories${buildQuery(query)}`)

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
