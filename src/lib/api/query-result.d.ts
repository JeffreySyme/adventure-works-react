export interface QueryResult<TModel> {
    totalCount: number
    data: TModel[]
}