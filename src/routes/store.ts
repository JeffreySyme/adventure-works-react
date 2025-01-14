import { createSlice } from '@reduxjs/toolkit'

export const systemSlice = createSlice({
  name: 'system',
  initialState: {
    breadcrumbs: [
      {
        active: true,
        text: 'Home',
        to: '/',
      }
    ] as BreadcrumbLink[],
    settings: {
      mode: 'light',
    } as Settings,
  },
  reducers: {
    setBreadcrumbs: (state, action) => {
      state.breadcrumbs = action.payload
    },
    setSettings: (state, action) => {
      state.settings = action.payload
    },
  },
})

export const {
  setBreadcrumbs,
  setSettings,
} = systemSlice.actions

export default systemSlice.reducer

export interface Settings {
  mode: 'light' | 'dark'
}
export interface BreadcrumbLink {
  active?: boolean
  text: string
  to: string
}