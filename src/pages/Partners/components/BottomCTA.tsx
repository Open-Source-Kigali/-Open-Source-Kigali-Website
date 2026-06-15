import { NavLink} from "react-router";
import {  ArrowUpRight} from "lucide-react";

const BottomCTA = () => {
  return (
    <section className="py-14 px-6 md:px-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            See what we're building.
            <br />
            <span className="text-blue-500">Your team could be part of it.</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <NavLink
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full text-sm transition-colors"
          >
            Browse Projects <ArrowUpRight size={14} />
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 rounded-full text-sm font-medium transition-colors"
          >
            About OSK
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default BottomCTA