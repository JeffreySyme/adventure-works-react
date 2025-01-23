import { useBreadcrumbs } from '../../lib'

export default function() {
    useBreadcrumbs([
        { text: 'Home', to: '/' },
        { active: true, text: 'Product Models', to: '/product-models' },
    ])
}
