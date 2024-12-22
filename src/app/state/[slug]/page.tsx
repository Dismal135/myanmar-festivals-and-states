export default async function Page ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const {slug} = await params
  const {id} = await searchParams
    return (
        <div> param {slug} query {id} </div>
    )
};