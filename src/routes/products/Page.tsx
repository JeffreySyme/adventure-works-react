import usePage from './use-page'
import { ProductsTable } from './components'
import { PageTitle } from '../../lib/components'

export default function () {
    const { data } = usePage()

    if (data === undefined) {
        return <div>Loading...</div>
    } else if (data === null) {
        return <div>An error occurred</div>
    }

    return (
        <>
            <PageTitle>Products</PageTitle>
            <ProductsTable data={data.data} />
        </>
    )
}
