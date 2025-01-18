import { useBreadcrumbs } from '../../lib/hooks'

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Sales Orders', to: '/sales-orders' },
    ])
}