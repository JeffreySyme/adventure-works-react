import { ODataFetch } from '../../lib/components'
import { getBaseUrl } from '../../lib/api/base-url'
import buildQuery from 'odata-query'
import usePage from './use-page'
import { CustomerModel } from '../../lib'
import { CustomersTable } from './components'

export default function() {
    const { query } = usePage()

    return (
        <ODataFetch url={`${getBaseUrl()}/Customers${buildQuery(query)}`}>
            {
                (data: { value: CustomerModel[] }) => (
                    <CustomersTable data={data.value}/>
                )
            }
        </ODataFetch>
    )
}
