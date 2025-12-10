import Herosection from "../sektioner/herosection";
import Projektsektion from "../sektioner/projektsektion";

export default function Projekt() {
  return (
    <>
      <Herosection
        bgUrl="/projekter_hero.png"
        height="h-[60vh]"
      />
      <div className="md:w-(--content-size) md:py-(--content-padding) m-auto">
        <Projektsektion />
      </div>
    </>
  );
}
