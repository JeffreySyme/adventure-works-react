import { useCallback, useEffect, useState } from 'react'
import { ProductCategoriesQuery, ProductCategoryModel, queryProductCategories, QueryResult } from '../../lib'
import { useBreadcrumbs, useTitle } from '../../lib/hooks'

const initialQuery: ProductCategoriesQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function usePage() {
    useTitle('Product Categories')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Product Categories', to: '/product-categories'},
    ])
    
    const [query] = useState<ProductCategoriesQuery>(initialQuery)
    const [data, setData] = useState<QueryResult<ProductCategoryModel> | null>()

    const getData = useCallback(async () => {
        setData(await queryProductCategories(query))
    }, [query])

    useEffect(() => { getData() }, [getData])

    return {
        data,
    }
}