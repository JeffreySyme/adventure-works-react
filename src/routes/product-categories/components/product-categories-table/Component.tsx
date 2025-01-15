import { Table } from 'react-bootstrap'
import { ProductCategoryModel, QueryResult } from '../../../../lib'

export default function Component({
    data,
}: ComponentProps) {
    return (
        <Table striped borderless hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Parent ID</th>
                    <th>Name</th>
                    <th>Modified Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.data.map((d) => (
                        <tr key={d.productCategoryId}>
                            <td>{d.productCategoryId}</td>
                            <td>{d.parentProductCategoryId ? d.parentProductCategoryId : '-'}</td>
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
    data: QueryResult<ProductCategoryModel>
}