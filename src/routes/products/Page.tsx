import { Container } from 'react-bootstrap'
import usePage from './use-page'
import { ProductsTable } from './components'

export default function() {
    const {
        data,
    } = usePage()

    if (data === undefined) {
        return <div>Loading...</div>
    } else if (data === null) {
        return <div>Not Found</div>
    }

    return (
        <Container fluid>
            <ProductsTable data={data} />
        </Container>
    )
}
