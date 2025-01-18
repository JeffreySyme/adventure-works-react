import { useEffect } from 'react'

export default function(title: string) {
    useEffect(() => {
        document.title = `Adventure Works - ${title}`
    }, [title])
}
