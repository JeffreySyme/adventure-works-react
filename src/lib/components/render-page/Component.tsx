export default function ({ data, children }: Props) {
    if (data === undefined) {
        return <div>Loading...</div>
    } else if (data === null) {
        return <div>An error occurred</div>
    }

    return children(data)
}

interface Props {
    data: any,
    children: (data: unknown) => any 
}