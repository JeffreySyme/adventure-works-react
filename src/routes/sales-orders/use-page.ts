import { useBreadcrumbs } from '../../lib/'

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Sales Orders', to: '/sales-orders' },
    ])
}