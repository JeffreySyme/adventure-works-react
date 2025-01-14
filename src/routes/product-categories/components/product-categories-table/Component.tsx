import { Table } from 'react-bootstrap'
import { ProductCategoryModel, QueryResult } from '../../../../lib'

export default function Component({ data }: ComponentProps) {
    return (
        <Table>
            <thead>
                <th>ID</th>
                <th>Parent Product Category ID</th>
                <th>Name</th>
                <th>Modified Date</th>
            </thead>
            <tbody>
                {
                    data.data.map((d) => (
                        <tr>
                            <td>{d.productCategoryId}</td>
                            <td>{d.parentProductCategoryId}</td>
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