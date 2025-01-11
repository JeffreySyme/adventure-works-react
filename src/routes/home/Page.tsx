import { Link } from 'react-router'

export default function Page() {
    return (
        <>
            <h4>Adventure Works Home</h4>
            <hr />
            <Link to="/customers">Customers</Link>
            <Link to="/product-categories">Product Categories</Link>
            <Link to="/product-models">Product Models</Link>
            <Link to="/products">Products</Link>
            <Link to="/sales-orders">Sales Orders</Link>
        </>
    )
}
