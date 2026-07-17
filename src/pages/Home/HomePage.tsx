import PartnersMarquee from "@/components/UI/PartnersMarquee";
import HeroSection from "@/pages/Home/components/HeroSection";
import About from "@/pages/Home/components/About";
import FeaturedProject from "@/pages/Home/components/FeaturedProject";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import { Events } from "./components/Events";



const HomePage = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <PartnersMarquee />
      <About/>
      <FeaturedProject />
      <Community/>
      <Events />
      
    

      {/* EVENTS PREVIEW */}
      
      <Testimonials />
      <FAQ/>
      <CTA/>

      
    </div>
  );
};

export default HomePage;
