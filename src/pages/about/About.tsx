import HeroSection from "@/pages/about/components/HeroSection";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import Teams from "./components/Teams";
import { usePageTitle } from "@/hooks";



//Page
const About = () => {
  usePageTitle("About Us — Open Source Kigali")
  return (
  <div className="font-sans">
    
    <HeroSection />
    <OurStory />
    <OurValues />
    <Teams/>
  </div>
  );
};

export default About;
