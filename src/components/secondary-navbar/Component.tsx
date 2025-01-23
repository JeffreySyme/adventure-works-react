import { Breadcrumb, BreadcrumbItem, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import { Breadcrumb as BreadcrumbLink } from '../../lib'

export default function({
    breadcrumbs,
}: Props) {
    return (
        <Navbar bg="primary-subtle" data-bs-theme="dark">
            <Container fluid>
                <Breadcrumb listProps={{ className: 'mb-0' }}>
                    {
                        breadcrumbs.map((b) => (
                            <BreadcrumbItem
                                key={b.to}
                                active={b.active}
                                linkAs={Link}
                                linkProps={{ to: b.to }}>
                                {b.text}
                            </BreadcrumbItem>
                        ))
                    }
                </Breadcrumb>
            </Container>
        </Navbar>
    )
}

interface Props {
    breadcrumbs: BreadcrumbLink[]
}