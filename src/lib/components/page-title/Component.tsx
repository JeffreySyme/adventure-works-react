import useComponent from './use-component'

export default function({ children: title }: ComponentProps) {
    useComponent(title)

    return <></>
}

interface ComponentProps {
    children: string
}
