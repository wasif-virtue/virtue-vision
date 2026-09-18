import Hero from "../components/Hero";
import Services from "../components/OurServices";
import Projects from "../components/FeaturedProjects";
import AboutUs from "../components/AboutUs";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Tech from "../components/Tech";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Team from "../components/Team";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <ChooseUs />
      <Tech /> {/* optional placement */}
      <Team />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
