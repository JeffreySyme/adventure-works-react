import { useState } from 'react'
import { ProductCategoriesQuery } from '../../lib'
import { useBreadcrumbs, useTitle } from '../../lib/hooks'

const initialQuery: ProductCategoriesQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function() {
    useTitle('Product Categories')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Product Categories', to: '/product-categories'},
    ])

    const [query] = useState<ProductCategoriesQuery>(initialQuery)

    return {
        query,
    }
}