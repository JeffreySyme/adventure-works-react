import { PageTitle } from '../../lib/components'
import usePage from './use-page'
import { CustomersTable } from './components'

export default function() {
    const { queryResult } = usePage()

    if (queryResult === undefined) {
        return <div>Loading...</div>
    } else if(queryResult === null) {
        return <div>An error occurred</div>
    }

    return (
        <>
            <PageTitle>Customers</PageTitle>
            <CustomersTable data={queryResult.data} />
        </>
    )
}
