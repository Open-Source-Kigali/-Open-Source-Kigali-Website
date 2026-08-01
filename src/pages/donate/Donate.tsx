import { Check, CreditCard, Smartphone } from "lucide-react";
import EyebrowLabel from "@/components/UI/EyebrowLabel";
import { ScrollAnimatedItem } from "@/components/UI/ScrollAnimatedItem";
import { Button } from "@/components/UI";
import { MONTHLY_TIERS, ONE_TIME_TIER } from "@/constants";
import type { DonateTier } from "@/types";
import { formatNumber } from "@/lib/formatters";

const TierCta = ({ tier }: { tier: DonateTier }) => {
  if (!tier.url) {
    return (
      <Button variant="secondary" fullWidth disabled>
        Coming soon
      </Button>
    );
  }
  return (
    <Button
      href={tier.url}
      external
      variant={tier.featured ? "donate" : "secondary"}
      fullWidth
    >
      {tier.interval === "monthly" ? "Support monthly" : "Donate once"}
    </Button>
  );
};

const Donate = () => (
  <div className="bg-white">
    <section className="pt-32 pb-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <EyebrowLabel text="Support OSK" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-5">
          Help us keep Rwanda's open source community running.
        </h1>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          Open Source Kigali is community run. Donations go toward meetups,
          mentorship, and keeping our projects maintained.
        </p>
      </div>
    </section>

    <section className="pb-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MONTHLY_TIERS.map((tier, i) => (
            <ScrollAnimatedItem
              key={tier.id}
              delay={i * 0.1}
              className={`rounded-2xl border p-7 flex flex-col ${
                tier.featured
                  ? "border-[#f4cd03] shadow-sm"
                  : "border-gray-100"
              }`}
            >
              {tier.featured && (
                <span className="self-start mb-3 px-2.5 py-1 rounded-full bg-[#f4cd03] text-gray-900 text-xs font-bold uppercase tracking-wide">
                  Most common
                </span>
              )}
              <h3 className="text-base font-black text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="mb-4">
                <span className="text-3xl font-black text-gray-900">
                  {formatNumber(tier.amount ?? 0)}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                  {" "}
                  {tier.currency} / month
                </span>
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {tier.description}
              </p>
              <TierCta tier={tier} />
            </ScrollAnimatedItem>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-base font-black text-gray-900 mb-2">
              {ONE_TIME_TIER.name}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {ONE_TIME_TIER.description} Pay with a card or with mobile money.
            </p>
          </div>
          <div className="md:w-56">
            <TierCta tier={ONE_TIME_TIER} />
          </div>
        </div>
      </div>
    </section>

    <section className="pb-24 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-black text-gray-900 mb-5 text-center">
          Ways to pay
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-colour flex items-center justify-center mb-4">
              <Smartphone size={20} />
            </div>
            <h3 className="text-base font-black text-gray-900 mb-2">
              Mobile money
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Available for one-time donations. Monthly plans need a card, so
              they cannot be set up on mobile money.
            </p>
          </div>
          <div className="border border-gray-100 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary-colour flex items-center justify-center mb-4">
              <CreditCard size={20} />
            </div>
            <h3 className="text-base font-black text-gray-900 mb-2">Card</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Visa and Mastercard, from Rwanda or anywhere else. Works for both
              monthly and one-time.
            </p>
          </div>
        </div>
        <p className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-6">
          <Check size={16} className="text-primary-colour" />
          You can cancel a monthly plan at any time.
        </p>
      </div>
    </section>
  </div>
);

export default Donate;
