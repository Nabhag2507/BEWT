export default async function Product({searchParams}:any) {
    const params  = await searchParams
    const page = params.pageNo

    return(
        <>
            {page.toString()}
        </>
    )
}