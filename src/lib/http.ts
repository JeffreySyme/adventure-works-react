export function httpGet(url: string) {
    return fetch(url, {
        method: 'GET',
        credentials: 'include',
    })
}

export function httpPost(url: string, body?: any) {
    return fetch(url, {
        method: 'POST',
        body: body ?? JSON.stringify(body),
        credentials: 'include',
    })
}

export function httpPut(url: string, body?: any) {
    return fetch(url, {
        method: 'PUT',
        body: body ?? JSON.stringify(body),
        credentials: 'include',
    })
}

export async function appFetch<TModel>(httpCallback: () => Promise<Response>) {
    const response = await httpCallback()

    if (response.status === 404) {
        return null
    } else if (!response.ok) {
        throw new Error('An error occurred.')
    }

    return await response.json() as TModel
}
