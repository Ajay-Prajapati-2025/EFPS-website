import "./home.css";
import DisplayMain from './DisplayMain';
import SectionSecond from './SectionSecond';
import SectionThird from './SectionThird';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';

export default function Home() {
  return (
    <div>
      <DisplayMain />
      <SectionSecond />
      <SectionThird />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}
