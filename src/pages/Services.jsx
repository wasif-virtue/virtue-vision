import ServicesHero from "../components/ServicesHero";
import OurServices from "../components/OurServices";
import Process from "../components/Process";
import Pricing from "../components/Pricing";
import SkillsShowcase from "../components/SkillsShowcase";
import FAQ from "../components/FAQ";
import Technologies from "../components/Tech";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";

export default function Services() {
  return (
    <main>
      <ServicesHero />
      <OurServices />
      <SkillsShowcase />
      <Technologies />
      <Process />
      <Pricing />
      <Testimonials/>
      <FAQ/>
      <CTA/>
    </main>
  );
}
