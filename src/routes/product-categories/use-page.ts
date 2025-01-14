import { useCallback, useEffect, useState } from 'react'
import { ProductCategoryModel, queryProductCategories, QueryResult } from '../../lib'

export default function usePage() {
    const [data, setData] = useState<QueryResult<ProductCategoryModel> | null>()

    const getData = useCallback(async () => {
        setData(await queryProductCategories())
    }, [])

    useEffect(() => { getData() }, [getData])
    useEffect(() => {
        document.title = 'Adventure Works - Product Categories'
    }, [])

    return {
        data,
    }
}