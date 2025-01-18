import useComponent from './use-component'

export default function({
    url,
    children,
}: ComponentProps) {
    const { code, data } = useComponent(url)

    if (data) {
        return children(data)
    } else if (code === 404) {
        <div>Not Found</div>
    } else if (code === 400) {
        <div>Bad Request</div>
    } else if (code === 500) {
        <div>Internal Server Error</div>
    }

    return <div>Loading...</div>
}

interface ComponentProps {
    url: string
    children: (data: any) => JSX.Element
}
