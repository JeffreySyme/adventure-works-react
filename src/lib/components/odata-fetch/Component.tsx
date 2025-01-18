import { QueryOptions } from 'odata-query'
import useComponent from './use-component'

export default function({
    children,
    name,
    query,
}: ComponentProps) {
    const {
        data,
        status,
    } = useComponent(name, query)

    if (data) {
        return children(data)
    } else if (status === 404) {
        <div>Not Found</div>
    } else if (status === 400) {
        <div>Bad Request</div>
    } else if (status === 500) {
        <div>Internal Server Error</div>
    }

    return <div>Loading...</div>
}

interface ComponentProps {
    children: (data: any) => JSX.Element
    name: string
    query: Partial<QueryOptions<unknown>>
}
