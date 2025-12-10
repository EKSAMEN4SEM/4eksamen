import Maalsaetning from "../components/maalsaetning";
import Profilkort from "../components/profilkort";
import Herosection from "../sektioner/herosection";

export default function Omos() {
  return (
    <>
      <Herosection
        bgUrl="/omos_hero.png"
        height="h-[60vh]"
      />
      <Maalsaetning />
      <Profilkort />
    </>
  );
}
