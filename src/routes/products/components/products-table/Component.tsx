import { Table } from 'react-bootstrap'
import { ProductModel, QueryResult } from '../../../../lib'

export default function({
    data,
}: ComponentProps) {
    return (
        <Table>
            <thead>
                <tr>ID</tr>
                <tr>Name</tr>
                <tr>Product Number</tr>
                <tr>Color</tr>
                <tr>Standard Cost</tr>
                <tr>List Price</tr>
                <tr>Size</tr>
                <tr>Weight</tr>
            </thead>
            <tbody>
                {
                    data.data.map((d) => (
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
    data: QueryResult<ProductModel>
}