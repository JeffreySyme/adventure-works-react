import { useCallback } from 'react'
import { setSettings, useDispatch, useSelector } from '../../lib'

export default function() {
    const settings = useSelector((state) => state.system.settings)
    const dispatch = useDispatch()

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