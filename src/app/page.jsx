import LearningThree from './threejs/LearningThree'
import Navbar from './components/navbar'
import Katalog from './sektioner/katalog'
import Branchecard from './components/byggebranchecard'
import ProjektCard from './components/projektcards'

export default async function Home() {

  return (
  <>
  <Navbar />
  <Branchecard />
  <ProjektCard />
  <Katalog />
{/*     <LearningThree /> */}
    <div>
      <h1></h1>
    </div>
  </>
);
  
}