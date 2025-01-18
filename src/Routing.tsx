import { Route, Routes } from 'react-router'
import {
    Customers,
    Home,
    ProductCategories,
    ProductModels,
    Products,
    SalesOrders,
} from './routes'

export default function() {
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
