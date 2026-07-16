import {  Link } from "react-router";
import EyebrowLabel from "@/components/UI/EyebrowLabel";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";
import { PARTNER_BENEFITS} from "@/constants";
import { ArrowRight, Users, BookOpen, Briefcase, Globe, CheckCircle,  Building2} from "lucide-react";




const BENEFIT_ICONS: Record<string, React.ReactNode> = {
  users: <Users size={20} />,
  book: <BookOpen size={20} />,
  globe: <Globe size={20} />,
  briefcase: <Briefcase size={20} />,
  building: <Building2 size={20} />,
  check: <CheckCircle size={20} />,
};


const Benefit = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white md:mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <div className="lg:sticky lg:top-28">
          <EyebrowLabel text="Why Partner with OSK" align="left" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-snug mb-5">
            What you get when
            <br />you build with us.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Partnerships are mutual. We ask for your support and we give something real back —
            every time.
          </p>
          <Link
            to="/partnersform"
            className="inline-flex items-center gap-2 text-base font-bold text-primary-colour border-b-2 border-primary-colour pb-0.5 hover:opacity-80 transition-colors"
          >
            Get in touch about a partnership <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PARTNER_BENEFITS.map((b, i) => (
            <ScrollAnimatedItem
              key={i}
              delay={i * 0.15}
              className="border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${b.iconBg} ${b.iconColor} mb-4`}>
                {BENEFIT_ICONS[b.iconKey]}
              </div>
              <h3 className="text-base font-black text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
            </ScrollAnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefit