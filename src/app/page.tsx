import {MainContent} from "./mainContent";

export default function Home() {
  
  return (
    <main className="p-4 flex flex-col justify-center items-center gap-5 absolute top-[70px] lg:static">
      <p className="text-sm text-justify">မြန်မာလူမျိုးများသည် ၎င်းတို့၏ ဓလေ့ထုံးတမ်းများကို ဂုဏ်ယူကြပြီး အထူးသဖြင့် နိုင်ငံ၏ တက်ကြွသောပွဲတော်များအတွင်း ထင်ရှားပါသည်။ မြန်မာတို့၏ ပွဲတော်များသည် ဗုဒ္ဓဘာသာယဉ်ကျေးမှုနှင့် ဆက်စပ်နေလေ့ရှိပြီး ကြီးမားသော စိတ်အားထက်သန်မှုနှင့် လူထုစိတ်ဓာတ်ဖြင့် ကျင်းပကြသည်။ နှစ်တစ်နှစ်၏လတိုင်းတွင် ထူးခြားသောပွဲတော်များဖြင့် အမှတ်အသားပြုထားသောကြောင့် အဆုံးမရှိကျင်းပသည့်နိုင်ငံတစ်ခုဖြစ်လာသည်။</p>
      <MainContent />
    </main>
  );
}
