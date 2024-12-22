export default async function Page ({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const {id} = await searchParams

    return (
        <div>{id}</div>
    )
};