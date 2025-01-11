import { appFetch, httpGet, httpPost, httpPut } from '../http'
import { QueryResult } from './query-result'

interface ODataQueryResponse {
    [name: string]: any
}

export async function query<TModel>(url: string) {
    const result = await appFetch<ODataQueryResponse>(
        () => httpGet(url)
    )

    return result
        ? {
            totalCount: result['@odata.count'],
            data: result['value.count'],
        } as QueryResult<TModel>
        : null
}
export function get<TModel>(url: string, parameters?: any) {
    if (!parameters) {
        return appFetch<TModel>(() => httpGet(url))
    }

    return appFetch<TModel>(() => httpPost(url, parameters))
}
export function create<TModel>(url: string, model: TModel) {
    return appFetch<TModel>(() => httpPost(url, model))
}
export function update<TModel>(url: string, model: TModel) {
    return appFetch<TModel>(() => httpPut(url, model))
}
