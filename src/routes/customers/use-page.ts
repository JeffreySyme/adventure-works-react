import { useState } from 'react'
import { CustomersQuery } from '../../lib'
import { useBreadcrumbs, useTitle } from '../../lib/hooks'

const initialQuery: CustomersQuery = {
    skip: 0,
    top: 50,
    count: true,
}

export default function() {
    useTitle('Customers')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Customers', to: '/customers' },
    ])

    const [query] = useState<CustomersQuery>(initialQuery)

    return {
        query,
    }
}
