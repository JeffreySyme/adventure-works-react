import { useBreadcrumbs, useTitle } from '../../lib/hooks'

export default function usePage() {
    useTitle('Products')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Products', to: '/products' },
    ])
}