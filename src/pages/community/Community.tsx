import HeroSection from "./components/HeroSection";
import Channels from "./components/Channels";
import CommunityGuidelines from "./components/CommunityGuidelines";
import BottomCTA from "./components/BottomCTA";
import { usePageTitle } from "@/hooks";

const Community = () => {
  usePageTitle("Community — Open Source Kigali");
  return (
  <>
    <HeroSection />
    <Channels/>
    <CommunityGuidelines/>
    <BottomCTA/>
  </>
  );
};

export default Community;