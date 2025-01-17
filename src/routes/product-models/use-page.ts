import { useBreadcrumbs, useTitle } from '../../lib/hooks'

export default function() {
    useTitle('Product Models')
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Product Models', to: '/product-models' },
    ])
}
