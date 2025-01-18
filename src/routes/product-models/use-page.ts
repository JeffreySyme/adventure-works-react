import { useBreadcrumbs } from '../../lib/hooks'

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Product Models', to: '/product-models' },
    ])
}
