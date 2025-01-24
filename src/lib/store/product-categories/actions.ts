import { ProductCategoriesQuery, ProductCategoryModel, QueryResult } from '../../api'

export type ProductCategoriesAction =
| { type: 'SET_PRODUCT_CATEGORIES_QUERY', payload: ProductCategoriesQuery }
| { type: 'SET_PRODUCT_CATEGORIES_QUERY_RESULT', payload?: QueryResult<ProductCategoryModel> | null }


export function setProductCategoriesQuery(payload: ProductCategoriesQuery): ProductCategoriesAction {
    return {
        type: 'SET_PRODUCT_CATEGORIES_QUERY',
        payload,
    }
}

export function setProductCategoriesQueryResult(payload?: QueryResult<ProductCategoryModel> | null): ProductCategoriesAction {
    return {
        type: 'SET_PRODUCT_CATEGORIES_QUERY_RESULT',
        payload,
    }
}
