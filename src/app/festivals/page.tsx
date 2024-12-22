import Image from "next/image";
import getFestivals from "../festivals"

export default async function FestivalsPage () {
    const festivals = await getFestivals();
    return (
        <div className="max-h-[70vh] px-2 flex flex-col gap-2">
            {
                festivals.map((festival) => (
                    <div key={festival.name} className="flex gap-2">
                    <Image src={festival.url} alt="festival" width={200} height={200} />
                    <div className="space-y-2">
                    <h1>{festival.name}</h1>
                    <p>{festival.date}</p>
                    <p>{festival.about}</p>
                    </div>
                    </div>
                ))
            }
        </div>
    )
};