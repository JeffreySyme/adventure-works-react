import { ProductCategoriesQuery, ProductCategoryModel, QueryResult } from "../../api";

export default function (): ProductCategoriesState {
    return {
        query: {
            skip: 0,
            top: 200,
            count: true,
        }
    }
}

export interface ProductCategoriesState {
    query: ProductCategoriesQuery
    queryResult?: QueryResult<ProductCategoryModel> | null
}
