import { ProductCategoriesTable } from './components'
import usePage from './use-page'
import { ODataFetch, PageTitle } from '../../lib/components'
import { getBaseUrl } from '../../lib/api/base-url'
import buildQuery from 'odata-query'
import { ProductCategoryModel } from '../../lib'

export default function () {
    const { query } = usePage()

    return (
        <>
            <PageTitle>Product Categories</PageTitle>
            <ODataFetch url={`${getBaseUrl()}/ProductCategories${buildQuery(query)}`}>
                {
                    (data: { value: ProductCategoryModel[] }) => (
                        <ProductCategoriesTable data={data.value} />
                    )
                }
            </ODataFetch>
        </>
    )
}