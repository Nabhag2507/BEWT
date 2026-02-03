async function Page({
    params,
}: {
    params: Promise<{ pageNO: string }>;
}) {
    const { pageNO } = await params;

    const page = Number(pageNO);

    const startingIndex = (page - 1) * 10 + 1;
    const endIndex = page * 10;

    return (
        <div>
            <h1>Starting Index: {startingIndex}</h1>
            <h1>End Index: {endIndex}</h1>
        </div>
    );
}

export default Page;
