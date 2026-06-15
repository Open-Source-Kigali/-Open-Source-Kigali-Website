import {Github, ArrowUpRight} from "lucide-react";
import EyebrowLabel from "@/components/UI/EyebrowLable";
import { FaDiscord } from "react-icons/fa6";
import primaryCTALink from '@/config/links'


const BottomCTA = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#FFFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <EyebrowLabel text="You Have Made It This Far" align="center" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            the Community tab won't close itself.
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            You've read enough. The next step isn't another page — it's joining
            the Discord, saying hi in #general, and finding your first issue.
            Takes 10 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <a
            href={primaryCTALink.social.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start p-7 bg-[#25D366] hover:bg-blue-400 rounded-2xl text-white transition-colors duration-200"
          >
            <FaDiscord size={28} className="mb-4" />
            <p className="font-black text-xl mb-1">Join Discord</p>
            <p className="text-blue-100 text-sm mb-6 leading-snug">
             Where learning and community come together.
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all">
              Open Discord <ArrowUpRight size={14} />
            </span>
          </a>

          <a
            href="https://github.com/Open-Source-Kigali"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start p-7 bg-gray-950 hover:bg-gray-800 rounded-2xl text-white transition-colors duration-200"
          >
            <Github size={28} className="mb-4" />
            <p className="font-black text-xl mb-1">Browse Projects</p>
            <p className="text-gray-400 text-sm mb-6 leading-snug">
              10 live repos. Find one that fits your skills.
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all text-gray-300">
              View GitHub <ArrowUpRight size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BottomCTA