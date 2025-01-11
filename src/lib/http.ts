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
