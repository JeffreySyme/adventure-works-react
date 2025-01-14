import { useBreadcrumbs, useTitle } from '../../lib/hooks'

export default function usePage() {
    useTitle('Customers')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Customers', to: '/customers' },
    ])
}
