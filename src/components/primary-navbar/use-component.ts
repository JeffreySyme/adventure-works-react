import { useCallback, useState } from 'react'

export default function() {
    const [showSettings, setShowSettings] = useState(false)

    const toggleSettings = useCallback(() => {
        setShowSettings(!showSettings)
    }, [ showSettings ])

    return {
        showSettings,
        toggleSettings,
    }
}