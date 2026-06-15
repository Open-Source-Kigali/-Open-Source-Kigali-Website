import { CheckCircle} from "lucide-react";
import EyebrowLabel from "@/components/UI/EyebrowLable";
import { PARTNERSHIP_STEPS,  WHAT_WE_LOOK_FOR } from "@/constants";



const Process = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div className="divide-y divide-gray-200">
          <div className="pb-8">
            <EyebrowLabel text="The Process" align="left" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-snug">
              Four steps.
              <br />No bureaucracy.
            </h2>
          </div>
          {PARTNERSHIP_STEPS.map((s, i) => (
            <div key={i} className="py-7 flex gap-5">
              <span className="text-2xl font-black text-gray-200 font-mono leading-none w-8 shrink-0">
                {s.n}
              </span>
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:pt-24">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <p className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-5">
              What we look for
            </p>
            {/* From WHAT_WE_LOOK_FOR constant */}
            <div className="space-y-4 mb-8">
              {WHAT_WE_LOOK_FOR.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-gray-500 text-base leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <div className="pt-6 border-t border-gray-100">
              <p className="text-gray-400 text-sm leading-relaxed">
                Partnerships are open to any organisation — big or small. If you're unsure
                whether you qualify, just reach out. The worst we can say is{" "}
                <em>not yet.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process