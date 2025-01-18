import { useBreadcrumbs } from '../lib/hooks'

export default function() {
    useBreadcrumbs([{
        active: true,
        text: 'Home',
        to: '/',
    }])
}
