import LearningThree from "./threejs/LearningThree";
import Katalog from "./katalog/page";
import Branchecard from "./components/byggebranchecard";
import Cementsektion from "./sektioner/cementliste";
import Cementtal from "./sektioner/cementtal";
import Herosection from "./sektioner/herosection";
import Projektsektion from "./sektioner/projektsektion";

export default async function Home() {
  return (
    <>
      <Herosection
        bgUrl="/stor_logo_hero.png"
        height="h-[70vh]"
      />
      <Branchecard />
      <Cementsektion />
      <Katalog />
      <Projektsektion />
      <Cementtal />
      {/*     <LearningThree /> */}
      <div>
        <h1></h1>
      </div>
    </>
  );
}
