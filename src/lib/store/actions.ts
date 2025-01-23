import { CustomersStateAction } from './customers'
import { SystemStateAction } from './system'

export type StateAction =
| CustomersStateAction
| SystemStateAction
