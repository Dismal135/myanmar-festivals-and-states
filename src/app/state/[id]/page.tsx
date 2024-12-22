export default async function Page ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const query = (await searchParams).id
    return (
        <div> quey {query}</div>
    )
};