import { customersInitialState, CustomersState } from './customers'
import { productCategoriesInitialState, ProductCategoriesState } from './product-categories'
import { systemInitialState, SystemState } from './system'

export default function () : State {
    return {
        customers: customersInitialState(),
        productCategories: productCategoriesInitialState(),
        system: systemInitialState()
    }
}

export interface State {
    customers: CustomersState
    productCategories: ProductCategoriesState
    system: SystemState
}
