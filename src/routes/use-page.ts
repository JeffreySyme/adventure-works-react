import { useBreadcrumbs } from '../lib'

export default function() {
    useBreadcrumbs([{
        active: true,
        text: 'Home',
        to: '/',
    }])
}
