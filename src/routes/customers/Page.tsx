import { PageTitle } from '../../lib/components'
import usePage from './use-page'
import { CustomersTable } from './components'

export default function() {
    const { data } = usePage()

    if (data === undefined) {
        return <div>Loading...</div>
    } else if(data === null) {
        return <div>An error occurred</div>
    }

    return (
        <>
            <PageTitle>Customers</PageTitle>
            <CustomersTable data={data.data} />
        </>
    )
}
