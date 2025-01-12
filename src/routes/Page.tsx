import { Container } from 'react-bootstrap'
import { Link } from 'react-router'
import usePage from './use-page'

export default function Page() {
    usePage()

    return (
        <Container className="pt-4">
            <h4>Home</h4>
            <hr />
            <Link className="d-block" to="/customers">Customers</Link>
            <Link className="d-block" to="/product-categories">Product Categories</Link>
            <Link className="d-block" to="/product-models">Product Models</Link>
            <Link className="d-block" to="/products">Products</Link>
            <Link className="d-block" to="/sales-orders">Sales Orders</Link>
        </Container>
    )
}
