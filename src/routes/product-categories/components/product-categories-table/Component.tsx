import { Table } from 'react-bootstrap'
import { ProductCategoryModel } from '../../../../lib'

export default function({
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
                    data.map((d) => (
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
    data: ProductCategoryModel[]
}