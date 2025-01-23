export interface Breadcrumb {
    active?: boolean
    text: string
    to?: string
}

export interface Settings {
    mode: 'light' | 'dark'
}

export interface SystemState {
    breadcrumbs: Breadcrumb[],
    settings: Settings,
}


