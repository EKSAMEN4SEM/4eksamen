import { getData } from '../lib/fetching'
import LearningThree from './threejs/LearningThree'

export default async function Home() {
  const data = await getData();

  return (
  <>
    <LearningThree />
    <div>
      <h1>What the fuck</h1>
    </div>
  </>
);
  
}