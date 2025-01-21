import { ProductCategoriesTable } from './components'
import usePage from './use-page'
import { PageTitle } from '../../lib/components'

export default function () {
    const { data } = usePage()

    if (data === undefined) {
        return <div>Loading...</div>
    } else if (data === null) {
        return <div>An error occurred.</div>
    }

    return (
        <>
            <PageTitle>Product Categories</PageTitle>
            <ProductCategoriesTable data={data.data} />
        </>
    )
}