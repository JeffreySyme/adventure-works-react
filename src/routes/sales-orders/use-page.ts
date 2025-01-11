import { useEffect } from 'react'

export default function usePage() {
    useEffect(() => {
        document.title = 'Adventure Works - Sales Orders'
    }, [])
}