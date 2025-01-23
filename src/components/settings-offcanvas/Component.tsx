import { Form, Offcanvas } from 'react-bootstrap'
import useComponent from './use-componet'

export default function({
    onHide,
    show,
}: Props) {
    const {
        onModeChange,
        settings,
    } = useComponent()
    
    return (
        <Offcanvas show={show} onHide={onHide} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Settings</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form.Check
                    type="switch"
                    label="Dark Mode"
                    checked={settings.mode === 'dark' ? true : false}
                    onChange={onModeChange}
                />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

interface Props {
    onHide: () => void
    show: boolean
}
