import usePage from './use-page'

export default function Page() {
    const {
        productCategories,
    } = usePage()

    if (productCategories === undefined) {
        return <div>Loading...</div>
    } else if (productCategories === null) {
        return <div>Not Found</div>
    }

    return (
        <>
            {
                productCategories.data.map((d) => (
                    <div>{d.productCategoryId}</div>
                ))
            }
        </>
    )
}