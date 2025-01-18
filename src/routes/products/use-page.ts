import { useState } from 'react'
import { useBreadcrumbs } from '../../lib/hooks'
import { ProductsQuery } from '../../lib'

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

    const [query] = useState<ProductsQuery>(initialQuery)
    
    return {
        query,
    }
}