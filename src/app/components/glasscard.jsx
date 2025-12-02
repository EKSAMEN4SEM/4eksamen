import Button from './button'

export default function Glass({
  overskrift,
  tekst,
  pris,
  img,
  width = "w-3/5",
  textSize = "text-xl"
}) {
  return (
    <div className={`${width} glass-card flex flex-col h-full m-auto`}>
        <div className="text-center flex flex-col h-full justify-between *:my-4 [&_*:last-child]:mt-4">

        {overskrift && (
          <h1 className="text-4xl font-(--font-weight)">{overskrift}</h1>
        )}

        {img && (
          <img className="m-auto" src={img} />
        )}

        {tekst && (
        <p className={`m-auto w-4/5 ${textSize}`}>{tekst}</p>
        )}

        {overskrift && <Button knapTekst="Læs mere" />}

        {pris && <p>{pris}</p>}

      </div>
    </div>
  );
}
