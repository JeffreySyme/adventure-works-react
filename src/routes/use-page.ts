import { useBreadcrumbs, useTitle } from '../lib/hooks'

export default function usePage() {
    useBreadcrumbs([{
        active: true,
        text: 'Home',
        to: '/',
    }])
    useTitle('Home')
}
