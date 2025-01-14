import { Breadcrumb, BreadcrumbItem, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

export default function Component() {
    return (
        <Navbar bg="primary-subtle" data-bs-theme="dark" sticky="top">
            <Container fluid>
                <Breadcrumb listProps={{ className: 'mb-0' }}>
                    <BreadcrumbItem as={Link} to="/">Home</BreadcrumbItem>
                </Breadcrumb>
            </Container>
        </Navbar>
    )
}