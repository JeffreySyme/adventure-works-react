import { Table } from 'react-bootstrap'
import { ProductModel } from '../../../../lib'

export default function ({
    data,
}: ComponentProps) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Product Number</th>
                    <th>Color</th>
                    <th>Standard Cost</th>
                    <th>List Price</th>
                    <th>Size</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d) => (
                        <tr>
                            <td>{d.productId}</td>
                            <td>{d.name}</td>
                            <td>{d.productNumber}</td>
                            <td>{d.color}</td>
                            <td>{d.standardCost}</td>
                            <td>{d.listPrice}</td>
                            <td>{d.size}</td>
                            <td>{d.weight}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

interface ComponentProps {
    data: ProductModel[]
}