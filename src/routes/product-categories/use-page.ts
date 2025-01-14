import { useCallback, useEffect, useState } from 'react'
import { ProductCategoryModel, queryProductCategories, QueryResult } from '../../lib'
import { useBreadcrumbs, useTitle } from '../../lib/hooks'

export default function usePage() {
    useTitle('Product Categories')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Product Categories', to: '/product-categories'},
    ])

    const [data, setData] = useState<QueryResult<ProductCategoryModel> | null>()

    const getData = useCallback(async () => {
        setData(await queryProductCategories())
    }, [])

    useEffect(() => { getData() }, [getData])

    return {
        data,
    }
}