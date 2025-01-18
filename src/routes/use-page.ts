import { useBreadcrumbs, useTitle } from '../lib/hooks'

export default function() {
    useBreadcrumbs([{
        active: true,
        text: 'Home',
        to: '/',
    }])
    useTitle('Home')
}
