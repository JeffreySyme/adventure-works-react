import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
import SettingsOffcanvas from '../settings-offcanvas/Component'
import useComponent from './use-component'
import { Settings } from '../../routes/store'

export default function Component() {
    const {
        showSettings,
        toggleSettings,
    } = useComponent()

    return (
        <>
            <Navbar color="primary-subtle" expand="lg" className="bg-body-tertiary" fixed="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Adventure Works</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
                            <Nav.Link as={Link} to="/product-categories">Product Categories</Nav.Link>
                            <Nav.Link as={Link} to="/product-models">Product Models</Nav.Link>
                            <Nav.Link as={Link} to="/sales-orders">Sales Orders</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={toggleSettings}>Settings</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <SettingsOffcanvas
                show={showSettings}
                onHide={toggleSettings}
            />
        </>
    )
}
