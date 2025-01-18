import { ProductCategoriesTable } from './components'
import usePage from './use-page'
import { ODataFetch, PageTitle } from '../../lib/components'
import { ProductCategoryModel } from '../../lib'

export default function () {
    const { query } = usePage()

    return (
        <>
            <PageTitle>Product Categories</PageTitle>
            <ODataFetch name='ProductCategories' query={query}>
                {
                    (data: { value: ProductCategoryModel[] }) => (
                        <ProductCategoriesTable data={data.value} />
                    )
                }
            </ODataFetch>
        </>
    )
}