import AboutVerdraSection from "../components/AboutVerdraSection";
import BenefitsSection from "../components/BenefitsSection";
import ContributeSection from "../components/ContributeSection";
import ExpansionVisionSection from "../components/ExpansionVisionSection";
import HeroSection from "../components/HeroSection";
import LifeCycleSection from "../components/LifeCycleSection";
import ShowcaseCards from "../components/ShowcaseCards";
import WhyVerdraExists from "../components/WhyVerdraExists";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShowcaseCards />
      <WhyVerdraExists />
      <ContributeSection />
      <LifeCycleSection />
      <AboutVerdraSection />
      <BenefitsSection />
      <ExpansionVisionSection />
    </main>
  );
}
