import Herosection from "../sektioner/herosection";
import Projektsektion from "../sektioner/projektsektion";

export default function Projekt() {
  return (
    <>
      <Herosection
        bgUrl="/projekter_hero.png"
        height="h-[60vh]"
      />
      <Projektsektion />
    </>
  );
}
