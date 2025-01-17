import { Container } from 'react-bootstrap'
import usePage from './use-page'
import { CustomersTable } from './components'

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
            <CustomersTable data={data} />
        </Container>
    )
}
