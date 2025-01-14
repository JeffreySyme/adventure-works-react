import { useCallback, useEffect, useState } from 'react'
import { ProductCategoryModel, queryProductCategories, QueryResult } from '../../lib'

export default function usePage() {
    const [productCategories, setProductCategories] = useState<QueryResult<ProductCategoryModel> | null>()

    const getProductCategories = useCallback(async () => {
        setProductCategories(await queryProductCategories())
    }, [])

    useEffect(() => { getProductCategories() }, [getProductCategories])
    useEffect(() => {
        document.title = 'Adventure Works - Product Categories'
    }, [])

    return {
        productCategories,
    }
}