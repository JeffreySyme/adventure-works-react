export interface ProductCategoryModel {
    productCategoryId: number
    parentProductCategoryId: number | null
    name: string
    modifiedDate: string
}