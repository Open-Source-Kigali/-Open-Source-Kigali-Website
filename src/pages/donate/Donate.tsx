import { useState } from "react";
import { Check } from "lucide-react";
import EyebrowLabel from "@/components/UI/EyebrowLabel";
import { DONATE_CURRENCY, DONATE_PLANS } from "@/constants";
import type { DonatePlan, DonatePlanKey } from "@/types";

const AmountButton = ({ amount, url }: { amount: number; url: string }) => {
  const label = `$${amount}`;
  if (!url) {
    return (
      <span
        aria-disabled="true"
        className="flex items-center justify-center h-14 rounded-lg border border-gray-200 text-gray-300 text-lg font-bold cursor-not-allowed"
      >
        {label}
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-14 rounded-lg border border-gray-300 text-gray-900 text-lg font-bold hover:border-gray-900 transition-colors"
    >
      {label}
    </a>
  );
};

const PlanPanel = ({ plan }: { plan: DonatePlan }) => (
  <div>
    <p className="text-gray-500 text-sm mb-5">{plan.blurb}</p>

    <div className="grid grid-cols-3 gap-3 mb-4">
      {plan.presets.map((p) => (
        <AmountButton key={p.amount} amount={p.amount} url={p.url} />
      ))}
    </div>

    {plan.customUrl ? (
      <a
        href={plan.customUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-14 rounded-lg bg-[#f4cd03] text-gray-900 text-base font-bold hover:bg-[#d9b703] transition-colors"
      >
        Enter your own amount
      </a>
    ) : (
      <span
        aria-disabled="true"
        className="flex items-center justify-center h-14 rounded-lg bg-gray-100 text-gray-400 text-base font-bold cursor-not-allowed"
      >
        Coming soon
      </span>
    )}
  </div>
);

const Donate = () => {
  const [active, setActive] = useState<DonatePlanKey>("one-time");
  const plan = DONATE_PLANS.find((p) => p.key === active) ?? DONATE_PLANS[0];

  return (
    <div className="bg-white">
      <section className="pt-32 pb-12 px-6 md:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <EyebrowLabel text="Support OSK" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
            Help keep Rwanda's open source community running.
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Open Source Kigali is community run. Your donation goes toward
            meetups, mentorship, and keeping our projects maintained.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-md mx-auto border border-gray-200 rounded-2xl p-6 sm:p-8">
          {/* Plan tabs */}
          <div
            role="tablist"
            aria-label="Donation frequency"
            className="grid grid-cols-2 gap-1 p-1 mb-6 rounded-lg bg-gray-100"
          >
            {DONATE_PLANS.map((p) => {
              const selected = p.key === active;
              return (
                <button
                  key={p.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(p.key)}
                  className={`h-10 rounded-md text-sm font-bold transition-colors ${
                    selected
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          <PlanPanel plan={plan} />

          <p className="text-xs text-gray-400 text-center mt-5">
            Amounts in {DONATE_CURRENCY}. You are taken to Flutterwave to
            complete your donation securely.
          </p>
        </div>

        <ul className="max-w-md mx-auto mt-6 space-y-2">
          <li className="flex items-center gap-2 text-gray-500 text-sm">
            <Check size={16} className="text-primary-colour shrink-0" />
            One-time donations accept card and mobile money.
          </li>
          <li className="flex items-center gap-2 text-gray-500 text-sm">
            <Check size={16} className="text-primary-colour shrink-0" />
            Monthly donations use a card and can be cancelled any time.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Donate;
