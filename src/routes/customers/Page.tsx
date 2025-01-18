import { ODataFetch, PageTitle } from '../../lib/components'
import usePage from './use-page'
import { CustomerModel } from '../../lib'
import { CustomersTable } from './components'

const modelName = 'Customers'

export default function() {
    const { query } = usePage()

    return (
        <>
            <PageTitle>{modelName}</PageTitle>
            <ODataFetch name={modelName} query={query}>
                {
                    (data: { value: CustomerModel[] }) => (
                        <CustomersTable data={data.value} />
                    )
                }
            </ODataFetch>
        </>
    )
}
