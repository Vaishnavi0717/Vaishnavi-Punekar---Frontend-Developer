import FaqSection from "../components/FaqSection";
import FooterSection from "../components/FooterSection";
import IDOSection from "../components/IDOSection";
import IntroductionSection from "../components/IntroductionSection";
import NavbarSection from "../components/NavbarSection";
import RoadMapSection from "../components/RoadMapSection";
import TokenSections from "../components/TokenSection";
import UpperSection from "../components/UpperSection";

export default function Home() {
  return (
    <main className=" overflow-x-hidden relative">
      <NavbarSection />
      <UpperSection/>
      <IntroductionSection/>
      <IDOSection />
      <TokenSections />
      <RoadMapSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
