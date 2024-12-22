import getCountryState from "@/app/getCountryState";

export default async function Page ({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const id = (await searchParams).id
    const state = await getCountryState(id);

    if (!id) {
      return <div>No Id</div>
    }

    if (!state) {
      return <div>Can not get state</div>
    }

    return (
        <div className="h-[70vh] px-3 flex flex-col gap-2">
            {/* <Image src={state.url} alt="myanmar people" width={150} height={150} /> */}
            <h1>{state.name}</h1>
            <p>{state.description}</p>
        </div>
    )
};