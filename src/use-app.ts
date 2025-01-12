import { useCallback, useEffect } from 'react'
import { useAppSelector } from './store'

export default function useApp() {
    const settings = useAppSelector((state) => state.system.settings)

    const setBsTheme = useCallback(() => {
        const rootElement = document.documentElement

        rootElement.setAttribute('data-bs-theme', settings.mode)
    }, [settings])

    useEffect(() => setBsTheme(), [setBsTheme])
}