import { Table } from 'react-bootstrap'
import { CustomerModel } from '../../../../lib'

export default function({
    data,
}: ComponentProps) {
    return (
        <Table striped borderless hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company Name</th>
                    <th>Sales Person</th>
                    <th>Email Address</th>
                    <th>Phone</th>
                    <th>Modified Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d) => (
                        <tr key={d.customerId}>
                            <td>{d.customerId}</td>
                            <td>{d.title}</td>
                            <td>{d.firstName}</td>
                            <td>{d.lastName}</td>
                            <td>{d.companyName}</td>
                            <td>{d.salesPerson}</td>
                            <td>{d.emailAddress}</td>
                            <td>{d.phone}</td>
                            <td>{d.modifiedDate}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

interface ComponentProps {
    data: CustomerModel[]
}