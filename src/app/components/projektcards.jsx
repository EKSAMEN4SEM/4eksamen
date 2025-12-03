import Glasscard from "../components/glasscard";
import { getDataArtikler } from "@/src/lib/fetching";

export default async function Projekt () {

    const projektData = await getDataArtikler();

    return (
     <section className="bg-[url(/jordfarvet-bg.png)] w-full h-fit flex items-center py-(--content-padding)">
        {projektData.map((item) => (
          <Glasscard
            key={item.id}
            overskrift={item.projekt}
            img={item.img}
            tekst={item.korttekst}
          />
        ))
        }
        </section>
    )
}