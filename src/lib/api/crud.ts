import { wrapFetch, httpGet, httpPost, httpPut } from '../http'
import { QueryResult } from './query-result'

interface ODataQueryResponse {
    [name: string]: any
}

export async function query<TModel>(url: string) {
    const result = await wrapFetch<ODataQueryResponse>(
        () => httpGet(url)
    )

    return result
        ? {
            totalCount: result['@odata.count'],
            data: result['value'],
        } as QueryResult<TModel>
        : null
}
export function get<TModel>(url: string, parameters?: any) {
    if (!parameters) {
        return wrapFetch<TModel>(() => httpGet(url))
    }

    return wrapFetch<TModel>(() => httpPost(url, parameters))
}
export function create<TResult>(url: string, model: any) {
    return wrapFetch<TResult>(() => httpPost(url, model))
}
export function update<TResult>(url: string, model: any) {
    return wrapFetch<TResult>(() => httpPut(url, model))
}