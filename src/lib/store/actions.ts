import { CustomersStateAction } from './customers'
import { ProductCategoriesAction } from './product-categories'
import { SystemStateAction } from './system'

export type StateAction =
| CustomersStateAction
| ProductCategoriesAction
| SystemStateAction
