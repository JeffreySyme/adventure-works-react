import { Breadcrumb, Settings } from './models'

export type SystemStateAction =
| { type: 'SET_BREADCRUMBS', payload: Breadcrumb[] }
| { type: 'SET_SETTINGS', payload: Settings }

export function setBreadcrumbs(breadcrumbs: Breadcrumb[]): SystemStateAction {
    return { type: 'SET_BREADCRUMBS', payload: breadcrumbs }
}
export function setSettings(settings: Settings): SystemStateAction {
    return { type: 'SET_SETTINGS', payload: settings }
}