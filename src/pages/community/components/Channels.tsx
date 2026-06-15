import {Github,MessageCircle,Linkedin,Twitter,ArrowUpRight} from "lucide-react";
import {  SOCIAL_PLATFORMS } from "@/constants";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";
import EyebrowLabel from "@/components/UI/EyebrowLable";



const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  discord: <MessageCircle size={22} />,
  github: <Github size={22} />,
  linkedin: <Linkedin size={22} />,
  twitter: <Twitter size={22} />,
};


const Channels = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <EyebrowLabel text="The Channels" align="left" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Where the real talk happens.
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm md:text-right leading-relaxed">
            We use Discord and WhatsApp. These are the channels you'll actually
            use every day.
          </p>
        </div>

        {/* Social platforms — from SOCIAL_PLATFORMS constant */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOCIAL_PLATFORMS.map((p, idx) => (
            <ScrollAnimatedItem key={p.name} delay={idx * 0.15}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300"
              >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform ${p.color}`}
              >
                {SOCIAL_ICONS[p.iconKey]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-gray-900 text-base">
                    {p.name}
                  </p>
                  <ArrowUpRight
                    size={14}
                    className="text-gray-400 group-hover:text-gray-700 transition-colors"
                  />
                </div>
                <p className="text-gray-400 text-sm font-mono truncate mb-1">
                  {p.handle}
                </p>
                <p className="text-gray-400 text-xs leading-snug">{p.desc}</p>
              </div>
              </a>
            </ScrollAnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Channels