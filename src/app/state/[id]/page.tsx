import getCountryState from "@/app/getCountryState";
import Image from "next/image";

export default async function Page ({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const id = (await searchParams).id
    const state = await getCountryState(id);

    return (
        <div className="h-[70vh] px-3 flex flex-col gap-2">
            {/* <Image src={state.url} alt="myanmar people" width={150} height={150} /> */}
            <h1>{state.name}</h1>
            <p>{state.description}</p>
        </div>
    )
};