import { ProductCategoriesAction } from './actions'
import { ProductCategoriesState } from './state'

export default function (state: ProductCategoriesState, action: ProductCategoriesAction): ProductCategoriesState {
    switch(action.type) {
        case 'SET_PRODUCT_CATEGORIES_QUERY':
            return {
                ...state,
                query: action.payload,
            }
        case 'SET_PRODUCT_CATEGORIES_QUERY_RESULT':
            return {
                ...state,
                queryResult: action.payload,
            }
    }
}
