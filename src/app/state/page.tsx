import Image from "next/image";
import fetchCountryStates from "../countryStates";
import Link from "next/link";

export default async function State() {
  const countryStates = await fetchCountryStates();

  if (!countryStates) {
    <div>Network error!</div>
  }

  return (
    <main className="text-center flex flex-col gap-2 mt-[80px]">
        <div>
        <h1>Myanmar States</h1>
        <p>အုပ်ချုပ်ရေးအရ မြန်မာနိုင်ငံကို ပြည်နယ်ခုနစ်ခု၊ တိုင်းဒေသကြီးခုနစ်ခု ခွဲခြားထားသည်။</p>
        </div>
        <div className="flex flex-wrap overflow-auto max-h-[60vh] justify-center items-center gap-2">
      {
        countryStates.map((state) => (
            <div key={state.name} className="shadow-2xl p-2 w-fit h-fit text-center flex flex-col gap-[1px]">
                <Image src={state.url} alt="myanmar states" width={150} height={150} />
                <h1>{state.name}</h1>
                <Link href={{
                  pathname: `/state/${encodeURIComponent(state.name)}`,
                  query: {id: state.id}
                }} className="bg-slate-800 text-white p-[2px] w-fit mx-auto">အသေးစိတ်</Link>
            </div>
        ))
      }
      </div>
      <p>Gallery တွင် မြန်မာလူမျိုးများအကြောင်း နောက်ထပ်ဓာတ်ပုံများကို ကြည့်ပါ။</p>
      <Link href={'#'} className="bg-slate-800 text-white p-2 w-fit mx-auto">ကြည့်ပါ။</Link>
    </main>
  );
}
