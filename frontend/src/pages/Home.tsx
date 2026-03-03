import HeroSection from '../components/HeroSection';
import ShowcaseCards from '../components/ShowcaseCards';
import WhyVerdraExists from '../components/WhyVerdraExists';
import LifeCycleSection from '../components/LifeCycleSection';
import ContributeSection from '../components/ContributeSection';
import BenefitsSection from '../components/BenefitsSection';
import ExpansionVisionSection from '../components/ExpansionVisionSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShowcaseCards />
      <WhyVerdraExists />
      <ContributeSection />
      <LifeCycleSection />
      <BenefitsSection />
      <ExpansionVisionSection />
    </main>
  );
}
