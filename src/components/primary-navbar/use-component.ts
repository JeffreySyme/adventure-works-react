import { useCallback, useState } from 'react'

export default function useComponent() {
    const [showSettings, setShowSettings] = useState(false)

    const toggleSettings = useCallback(() => {
        setShowSettings(!showSettings)
    }, [ showSettings ])

    return {
        showSettings,
        toggleSettings,
    }
}