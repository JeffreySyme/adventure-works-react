import { useCallback, useEffect } from 'react'
import { useAppSelector } from './store'
import { useSelector } from './lib'

export default function() {
    const settings = useSelector((state) => state.system.settings)
    const breadcrumbs = useAppSelector((state) => state.system.breadcrumbs)

    const setMode = useCallback(() => {
        const rootElement = document.documentElement

        rootElement.setAttribute('data-bs-theme', settings.mode)
    }, [settings])

    useEffect(() => setMode(), [setMode])

    return {
        breadcrumbs,
        settings,
    }
}