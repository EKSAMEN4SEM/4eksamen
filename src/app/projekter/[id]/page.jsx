import { getDataArtikel } from "@/src/lib/fetching";


export default async function SingleProjekt ( {params} ) {

    const { id } = await params;
    const projektData = await getDataArtikel(params.id);
    const data = projektData[0];
    console.log("PARAMS ID", params.id)

    return (
        <div>
      {/*       <h1>{data.overskrift}</h1> */}
        </div>
    )
}