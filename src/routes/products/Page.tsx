import usePage from './use-page'
import { ProductsTable } from './components'
import { ODataFetch } from '../../lib/components'
import { getBaseUrl } from '../../lib/api/base-url'
import buildQuery from 'odata-query'
import { ProductModel } from '../../lib'

export default function() {
    const { query } = usePage()

    return (
        <ODataFetch url={`${getBaseUrl()}/Products${buildQuery(query)}`}>
            {
                (data: { value: ProductModel[]}) => (
                    <ProductsTable data={data.value} />
                )
            }
        </ODataFetch>
    )
}
