import { Container } from 'react-bootstrap'
import { ProductCategoriesTable } from './components'
import usePage from './use-page'

export default function Page() {
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
            <ProductCategoriesTable data={data} />
        </Container>
    )
}