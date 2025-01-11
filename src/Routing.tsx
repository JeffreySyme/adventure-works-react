import { Route, Routes } from 'react-router'
import Home from './home/Page'
import Customers from './customers/Page'
import ProductCategories from './product-categories/Page'
import ProductModels from './product-models/Page'
import Products from './products/Page'
import SalesOrders from './sales-orders/Page'

export default function Routing() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="customers" element={<Customers />} />
            <Route path="product-categories" element={<ProductCategories />} />
            <Route path="product-models" element={<ProductModels />} />
            <Route path="products" element={<Products />} />
            <Route path="sales-orders" element={<SalesOrders />} />
        </Routes>
    )
}