import { getDataArtikel } from "@/src/lib/fetching";
import Glasscard from '../../components/glasscard'


export default async function SingleProjekt(props) {
    const params = await props.params;
    const projektData = await getDataArtikel(params.id);
    const data = projektData[0];

    return (
        <section className="w-(--content-size) py-(--content-padding) m-auto">
            <div className="glass-card p-12 flex flex-col items-center">
                <img className="object-cover h-[500px] w-full rounded-lg" src={data.img} alt="Sektions billede" />
                <h1 className="text-4xl font-(--font-weight) mt-8">{data.overskrift}</h1>
                <p className="text-lg mt-4">{data.broedtekst}</p>
            </div>
        </section>
    )
}