import { Table } from 'react-bootstrap'
import { QueryResult } from '../../../../lib'
import { ProductModelModel } from '../../../../lib/api/product-models'

export default function({
    data,
}: ComponentProps) {
    return (
        <Table striped borderless hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Modified Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.data.map((d) => (
                        <tr>
                            <td>{d.productModelId}</td>
                            <td>{d.name}</td>
                            <td>{d.modifiedDate}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

interface ComponentProps {
    data: QueryResult<ProductModelModel>
}