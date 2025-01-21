import { createSlice } from '@reduxjs/toolkit'
import { CustomerModel, CustomersQuery, QueryResult } from '../../lib'

export const customersSlice = createSlice({
    name: 'customers',
    initialState: {
        customersQuery: {
            skip: 0,
            take: 50,
            count: true,
        }
    } as CustomersState,
    reducers: {
        setCustomers(state, action) {
            state.customers = action.payload
        },
        setCustomersQuery(state, action) {
            state.customersQuery = action.payload
            state.customers = undefined
        }
    }
})

export const {
    setCustomers,
    setCustomersQuery,
} = customersSlice.actions

export default customersSlice.reducer

interface CustomersState {
    customers?: QueryResult<CustomerModel> | null
    customersQuery: CustomersQuery
}
