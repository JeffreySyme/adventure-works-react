import { StateAction } from './actions'
import { customersReducer, CustomersStateAction } from './customers'
import { ProductCategoriesAction, productCategoriesReducer } from './product-categories'
import { State } from './state'
import { systemReducer, SystemStateAction } from './system'

export default function (state: State, action: StateAction): State {
    return {
        customers: customersReducer(state.customers, action as CustomersStateAction),
        productCategories: productCategoriesReducer(state.productCategories, action as ProductCategoriesAction),
        system: systemReducer(state.system, action as SystemStateAction),
    }
}
