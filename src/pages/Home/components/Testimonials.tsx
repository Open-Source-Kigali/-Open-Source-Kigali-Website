import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import EyebrowLabel from "@/components/UI/EyebrowLabel";
import { TESTIMONIALS } from "@/constants/homepage";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";
import { useAutoPlay } from "@/hooks";

const Testimonials = () => {
  const { current, paused, next, prev, goTo, setPaused } = useAutoPlay({
    length: TESTIMONIALS.length,
    interval: 4000,
  });

  const visibleTestimonials = Array.from(
    { length: 3 },
    (_, i) => TESTIMONIALS[(current + i) % TESTIMONIALS.length],
  );

  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <EyebrowLabel text="Community Voices" align="center" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">
            What Our Contributors Say
          </h2>
          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from real people who've grown through Open Source
            Kigali.
          </p>
        </div>

        {/* Cards — pause on hover */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visibleTestimonials.map((testimonial, i) => (
            <ScrollAnimatedItem
              key={`${testimonial.id}-${current}-${i}`}
              delay={i * 0.15}
              className={`bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 ${
                i === 0 ? "flex" : i === 1 ? "hidden md:flex" : "hidden lg:flex"
              }`}
            >
              <Quote size={28} style={{ color: "#5b9fff" }} />
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-1">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white shrink-0"
                  style={{ background: testimonial.color }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </ScrollAnimatedItem>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300 overflow-hidden shrink-0"
                style={
                  i === current
                    ? { width: "24px", height: "10px", background: "#e8f1ff" }
                    : { width: "10px", height: "10px", background: "#d1d5db" }
                }
              >
                {i === current && (
                  <div
                    key={current}
                    className="h-full rounded-full"
                    style={{
                      background: "#2b7fff",
                      animation: paused
                        ? "none"
                        : "osk-dot-progress 4000ms linear forwards",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      <style>{`
          @keyframes osk-dot-progress {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
    </section>
  );
};

export default Testimonials;
