import HeroSection from "@/pages/about/components/HeroSection";
import OurStory from "./components/OurStory";
import OurValues from "./components/OurValues";
import Teams from "./components/Teams";



//Page
const About = () => {
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
