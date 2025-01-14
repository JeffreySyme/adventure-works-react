import { Breadcrumb, BreadcrumbItem, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import { BreadcrumbLink } from '../../routes/store'

export default function Component({
    breadcrumbs,
}: ComponentProps) {
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

interface ComponentProps {
    breadcrumbs: BreadcrumbLink[]
}