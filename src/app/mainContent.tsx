import Image from "next/image"
import Link from "next/link"
import festival from '../../public/festival.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export const MainContent = () => {
    return (
        <>
        <div className="justify-center items-center md:max-w-[1200px] gap-5 hidden md:flex">
      <div className="flex flex-col gap-2">
      <Image src={'https://cdn.britannica.com/12/61412-050-A4FCE8CE/Ruins-pagodas-shrines-Buddhist-Myanmar-Pagan.jpg'} width={1200} height={1200} alt='myanmar' />        
        <p className="text-center">မြန်မာနိုင်ငံသည် အရှေ့တောင်အာရှ အနောက်မြောက်ဘက်တွင်ရှိသော နိုင်ငံဖြစ်သည်။</p>
        <p className="text-center">
        မြန်မာနိုင်ငံ၏ မြို့တော်မှာ နေပြည်တော်ဖြစ်ပြီး အကြီးဆုံးမြို့မှာ ရန်ကုန် (ယခင်ရန်ကုန်)၊</p>
        <Link href={'/about'} className="bg-slate-800 text-white p-2 w-fit bounce-link2">ပြည်နယ်များ...</Link>
      </div>
      <div className="flex flex-col gap-2">
        <Image alt='festival' src={festival} width={1200} height={1200} />
      <p className="text-center">
      မြန်မာနိုင်ငံမှာ ပွဲတော်တွေ အများကြီးရှိပြီး လတိုင်းရဲ့ အဓိကပွဲတော်တွေပါ။</p>
      <Link href={'/festivals'} className="bg-slate-800 text-white p-2 w-fit bounce-link2">ပွဲတော်များကိုကြည့်ပါ။</Link>
      </div>
    </div>

<Carousel className="md:hidden">
  <CarouselContent>
    <CarouselItem>
        <div className="flex flex-col gap-2">
      <Image src={'https://cdn.britannica.com/12/61412-050-A4FCE8CE/Ruins-pagodas-shrines-Buddhist-Myanmar-Pagan.jpg'} width={1200} height={1200} alt='myanmar' />        
        <p>Myanmar is a country in northwest Southeast Asia.</p>
        <p>The country's capital city is Naypyidaw, and its largest city is Yangon (formerly Rangoon).</p>
        <Link href={'/about'} className="bg-slate-800 text-white p-2 w-fit bounce-link2">Read more...</Link>
      </div>
      </CarouselItem>
    <CarouselItem>
        <div className="flex flex-col gap-2">
        <Image alt='festival' src={festival} width={1200} height={1200} />
      <p>There are alot of festivals in myanmar and here are the main festivals for each months.</p>
      <Link href={'/festivals'} className="bg-slate-800 text-white p-2 w-fit bounce-link2">See Festivals</Link>
      </div>
      </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

        </>
    )
}