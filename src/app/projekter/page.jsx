import Herosection from "../sektioner/herosection";
import Projektsektion from "../sektioner/projektsektion";

export default function Projekt() {
  return (
    <>
      <Herosection
        src=""
        vh="sm:h-[60vh]"
        overskrift="PROJEKTER"
      />
      <div className="w-(--content-size) py-(--content-padding) m-auto">
        <Projektsektion />
      </div>
    </>
  );
}
