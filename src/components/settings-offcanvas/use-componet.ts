import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { setSettings } from '../../routes/store'

export default function() {
    const settings = useAppSelector((state) => state.system.settings)
    const dispatch = useAppDispatch()

    const onModeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettings(e.target.checked
            ? { ...settings, mode: 'dark' }
            : { ...settings, mode: 'light' }
        ))
    }, [settings])

    return {
        settings,
        onModeChange,
    }
}