import { useState } from 'react'
import { ProductCategoriesQuery } from '../../lib'
import { useBreadcrumbs } from '../../lib/hooks'

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

    const [query] = useState<ProductCategoriesQuery>(initialQuery)

    return {
        query,
    }
}