import Herosection from "../sektioner/herosection";
import Katalogcard from "../components/katalogcard";

export default async function Katalog() {
  return (
    <>
      <Herosection
        src=""
        vh="sm:h-[60vh]"
        overskrift="PRODUKTER"
      />
      <Katalogcard />
    </>
  );
}
