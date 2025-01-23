export default function(): SystemState {
    return {
        breadcrumbs: [],
        settings: {
            mode: 'light'
        }
    }
}

export interface SystemState {
    breadcrumbs: Breadcrumb[],
    settings: Settings,
}

export interface Breadcrumb {
    active?: boolean
    text: string
    to?: string
}

export interface Settings {
    mode: 'light' | 'dark'
}
