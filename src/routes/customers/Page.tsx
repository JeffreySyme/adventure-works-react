import { PageTitle } from '../../lib/components'
import usePage from './use-page'
import { CustomersTable } from './components'

const modelName = 'Customers'

export default function() {
    const { data } = usePage()
    console.log(data)

    if (data === undefined) {
        return <div>Loading...</div>
    } else if(data === null) {
        return <div>An error occurred</div>
    }

    return (
        <>
            <PageTitle>{modelName}</PageTitle>
            <CustomersTable data={data.data} />
        </>
    )
}
