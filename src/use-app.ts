import { useCallback, useEffect } from 'react'
import { useSelector } from './lib'

export default function () {
    const breadcrumbs = useSelector(state => state.system.breadcrumbs)
    const settings = useSelector(state => state.system.settings)

    const setMode = useCallback(() => {
        const rootElement = document.documentElement

        rootElement.setAttribute('data-bs-theme', settings.mode)
    }, [settings])

    useEffect(() => setMode(), [setMode])

    return {
        breadcrumbs
    }
}