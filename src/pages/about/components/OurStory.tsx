import {  STORY_POINTS} from "@/constants";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";
import EyebrowLabel from "@/components/UI/EyebrowLabel";




const Dot = ({ color, size, style }: DotProps) => (
  <div
    className={`absolute rounded-full ${color} ${size}`}
    style={{ opacity: 0.85, ...style }}
  />
);

interface DotProps {
  color: string;
  size: string;
  style?: React.CSSProperties;
}


const OurStory = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="relative">
          <Dot
            color="bg-blue-500"
            size="w-2.5 h-2.5"
            style={{ top: "10%", left: "-16px" }}
          />
          <Dot
            color="bg-pink-400"
            size="w-4 h-4"
            style={{ bottom: "20%", right: "10%" }}
          />

          <EyebrowLabel text="Our Story" align="left" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-snug">
            We're building the economic infrastructure for open source in
            Rwanda.
          </h2>

          <div className="flex items-start gap-4 mt-8">
            <div className="w-12 h-12 shrink-0 rounded-full border-4 border-blue-500 border-r-transparent border-b-transparent rotate-45 mt-1" />
            <p className="text-gray-500 text-base leading-relaxed">
              A living place for curiosity and collaboration, meeting and
              meaning. The heart of a community where developers ship real
              things together.
            </p>
          </div>
        </div>

        {/* Right — numbered story points from constant */}
        <div className="flex flex-col divide-y divide-gray-100">
          {STORY_POINTS.map((sp, idx) => (
            <ScrollAnimatedItem key={sp.number} delay={idx * 0.15} className="py-6 first:pt-0 last:pb-0">
              <div className="flex gap-4">
                <span className="text-blue-500 font-black text-base w-8 shrink-0">
                  {sp.number}.
                </span>
                <div>
                  <p className="font-bold text-gray-900 text-xl mb-1">
                    {sp.title}
                  </p>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    {sp.body}
                  </p>
                </div>
              </div>
            </ScrollAnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurStory