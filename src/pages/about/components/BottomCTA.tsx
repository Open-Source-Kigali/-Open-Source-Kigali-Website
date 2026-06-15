import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";
import primaryCTALink from '@/config/links'


//Types
interface DotProps {
  color: string;
  size: string;
  style?: React.CSSProperties;
}

//Sub-components

// Purely decorative floating blob — no logic, no state
const Dot = ({ color, size, style }: DotProps) => (
  <div
    className={`absolute rounded-full ${color} ${size}`}
    style={{ opacity: 0.85, ...style }}
  />
);

const BottomCTA = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-background-colour relative overflow-hidden">
      <Dot
        color="bg-blue-500"
        size="w-48 h-48"
        style={{ top: "-24px", right: "-24px", opacity: 0.08 }}
      />
      <Dot
        color="bg-blue-400"
        size="w-32 h-32"
        style={{ bottom: "-16px", left: "10%", opacity: 0.06 }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-10 relative z-10">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Your first PR
            <br />
            <span className="text-blue-400">is one click away.</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <PrimaryButton to={primaryCTALink.social.discord} className="w-full sm:w-auto">
            Join the Community
          </PrimaryButton>
          <SecondaryButton to="/projects">Browse Projects</SecondaryButton>
        </div>
      </div>
    </section>
  )
}

export default BottomCTA