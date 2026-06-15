import SecondaryButton from "@/components/UI/SecondaryButton";
import { ArrowRight} from "lucide-react";



const Banner = () => {
  return (
    <div className="px-6 md:px-20 md:mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background-colour rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-black text-lg leading-snug">
              Ready to partner with OSK?
            </p>
            <p className="text-blue-100 text-sm mt-1">
              We respond to all enquiries within 48 hours.
            </p>
          </div>
          <SecondaryButton to="/partnersform">
            Get in touch <ArrowRight size={14} />
          </SecondaryButton>
        </div>
      </div>
    </div>
  )
}

export default Banner