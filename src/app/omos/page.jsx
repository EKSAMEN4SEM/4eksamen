import Maalsaetning from "../components/maalsaetning";
import Profilkort from "../components/profilkort";
import Herosection from "../sektioner/herosection";

export default function Omos() {
  return (
    <>
      <Herosection
        src=""
        vh="sm:h-[60vh]"
        overskrift="OM OS"
      />
      <Maalsaetning />
      <Profilkort />
    </>
  );
}
