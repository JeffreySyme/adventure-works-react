import { configureStore } from '@reduxjs/toolkit'
import systemReducer from './routes/store'
import customersReducer from './routes/customers/store'
import { useDispatch, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    system: systemReducer,
    customers: customersReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
