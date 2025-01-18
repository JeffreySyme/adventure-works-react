import { useBreadcrumbs, useTitle } from '../../lib/hooks'

export default function() {
    useTitle('Sales Orders'),
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Sales Orders', to: '/sales-orders' },
    ])
}