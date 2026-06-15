import EyebrowLabel from "@/components/UI/EyebrowLable";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";
import { VALUES} from "@/constants";


const OurValues = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <EyebrowLabel text="What We Stand For" align="left" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
              Five things we don't negotiate on.
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-lg max-w-xs text-start leading-relaxed">
            These aren't values we put on a wall. They're the ones that show up
            in how we run sessions, review PRs, and treat new members.
          </p>
        </div>

        {/* Values list — data from VALUES constant */}
        <div className="divide-y divide-gray-100">
          {VALUES.map((v, idx) => (
            <ScrollAnimatedItem
              key={v.number}
              delay={idx * 0.15}
              className="group py-8 grid grid-cols-12 gap-6 items-start hover:bg-gray-50 hover:-mx-6 hover:px-6 rounded-xl transition-all duration-200 cursor-default"
            >
              <span className="col-span-2 md:col-span-1 text-gray-200 font-black text-2xl group-hover:text-blue-500 transition-colors font-mono">
                {v.number}
              </span>
              <div className="col-span-10 md:col-span-11 grid md:grid-cols-2 gap-2 md:gap-12 items-baseline">
                <h3 className="text-base md:text-xl font-bold text-gray-900">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  {v.body}
                </p>
              </div>
            </ScrollAnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurValues