import { useCallback, useEffect } from 'react'
import { queryProductCategories } from '../lib'

export default function usePage() {

    const getProductCategories = useCallback(async () => {
        const productCategories = await queryProductCategories()

        console.log(productCategories)
    }, [])

    useEffect(() => { getProductCategories() }, [])
    useEffect(() => {
        document.title = 'Adventure Works - Home'
    }, [])
}