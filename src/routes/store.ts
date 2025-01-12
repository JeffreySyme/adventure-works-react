import { createSlice } from '@reduxjs/toolkit'

export const systemSlice = createSlice({
  name: 'system',
  initialState: {
    settings: {
        mode: 'light'
    } as Settings
  },
  reducers: {
    setSettings: (state, action) => {
        state.settings = action.payload
    },
  },
})

export const { setSettings } = systemSlice.actions

export default systemSlice.reducer

export interface Settings {
    mode: 'light' | 'dark'
}