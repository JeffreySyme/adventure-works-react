import usePage from './use-page'
import { ProductsTable } from './components'
import { ODataFetch, PageTitle } from '../../lib/components'
import { ProductModel } from '../../lib'

export default function () {
    const { query } = usePage()

    return (
        <>
            <PageTitle>Products</PageTitle>
            <ODataFetch name='Products' query={query}>
                {
                    (data: { value: ProductModel[] }) => (
                        <ProductsTable data={data.value} />
                    )
                }
            </ODataFetch>
        </>
    )
}
