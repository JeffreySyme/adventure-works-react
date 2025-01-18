import { useCallback, useEffect, useState } from 'react'

export default function(url: string) {
    const [code, setCode] = useState(0)
    const [data, setData] = useState<any>()

    const getData = useCallback(async() => {
        const response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
        })

        setCode(response.status)
        setData(await response.json())
    }, [url])

    useEffect(() => { getData() }, [getData])

    return {
        code,
        data,
    }
}