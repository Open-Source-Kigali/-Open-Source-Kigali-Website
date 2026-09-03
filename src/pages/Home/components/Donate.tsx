import { useState } from "react";
import { Heart } from "lucide-react";
import oskLogo from "@/assets/Logo/OSK-primary-logo-1200-400-white.svg";

// ─── Preset donation amounts (Mozilla-style) ───────────────────────────────
const AMOUNTS = [5, 10, 25, 50, 100];

// ─── Donation frequencies ──────────────────────────────────────────────────
const FREQUENCIES = [
  { id: "monthly", label: "Monthly" },
  { id: "one-time", label: "One-time" },
];

// ─── Impact statements per amount ─────────────────────────────────────────
const IMPACT: Record<number, string> = {
  5:   "Covers hosting costs for one open-source project for a month.",
  10:  "Helps us run one community workshop for Kigali students.",
  25:  "Sponsors a contributor's first open-source contribution kit.",
  50:  "Funds a full community event session and mentorship day.",
  100: "Supports an entire cohort of student contributors for a month.",
};

const Donate = () => {
  const [frequency, setFrequency] = useState<"monthly" | "one-time">("monthly");
  const [selected, setSelected] = useState<number>(10);
  const [custom, setCustom] = useState<string>("");

  const displayAmount = custom ? Number(custom) : selected;
  const impact = IMPACT[selected] ?? "Every dollar fuels Rwanda's open-source movement.";

  return (
    <section
      className="relative overflow-hidden py-24 px-4 md:px-20"
      style={{ background: "linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a0f1e 100%)" }}
    >
      {/* Glow blobs — same style as CTA section */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(11,163,223,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: Pitch ───────────────────────────────────────────────── */}
        <div>
          {/* OSK Logo */}
          <img
            src={oskLogo}
            alt="Open Source Kigali"
            className="h-10 mb-8 opacity-90"
          />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <Heart size={12} className="text-red-400 fill-red-400" />
            <span className="text-white/70 text-xs tracking-wide uppercase">
              Support the mission
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Help us keep{" "}
            <span className="text-primary-colour">open source</span>
            <br />
            alive in Rwanda.
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            Open Source Kigali is a community-powered movement. Your donation
            directly funds workshops, contributor tools, and events that shape
            Rwanda's next generation of tech builders.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6">
            {[
              { value: "1,500+", label: "Contributors supported" },
              { value: "30+",    label: "Events hosted" },
              { value: "100%",   label: "Community-driven" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-bold text-xl">{stat.value}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Donation card (Mozilla-style) ──────────────────────── */}
        <div
          className="rounded-2xl border border-white/10 overflow-hidden"
          style={{
            background: "#111827",
            boxShadow: "0 0 0 1px rgba(11,163,223,0.12), 0 32px 64px rgba(0,0,0,0.5)",
          }}
        >
          {/* Card header */}
          <div className="px-6 py-5 border-b border-white/8 bg-white/3">
            <p className="text-white font-semibold text-lg">Make a donation</p>
            <p className="text-gray-500 text-sm mt-0.5">
              Secure · Transparent · Impactful
            </p>
          </div>

          <div className="px-6 py-6 space-y-6">

            {/* Frequency toggle */}
            <div className="flex gap-2 p-1 rounded-full bg-white/5 border border-white/10 w-fit">
              {FREQUENCIES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFrequency(f.id as "monthly" | "one-time")}
                  className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    frequency === f.id
                      ? "bg-primary-colour text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Preset amounts */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                Choose an amount (USD)
              </p>
              <div className="grid grid-cols-5 gap-2">
                {AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelected(amt); setCustom(""); }}
                    className={`py-2.5 rounded-xl text-sm font-bold border transition-all duration-200 ${
                      selected === amt && !custom
                        ? "bg-primary-colour border-primary-colour text-white scale-105"
                        : "bg-white/5 border-white/10 text-gray-300 hover:border-primary-colour hover:text-white"
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom amount */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">
                Or enter a custom amount
              </p>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">
                  $
                </span>
                <input
                  type="number"
                  min="1"
                  placeholder="Other amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(0); }}
                  className="w-full pl-8 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-colour transition-colors"
                />
              </div>
            </div>

            {/* Impact message */}
            {selected > 0 && !custom && (
              <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-primary-colour/10 border border-primary-colour/20">
                <Heart size={14} className="text-primary-colour mt-0.5 shrink-0 fill-primary-colour" />
                <p className="text-gray-300 text-sm leading-snug">{impact}</p>
              </div>
            )}

            {/* CTA button */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary-colour hover:bg-[#0993c9] text-white font-bold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Heart size={16} className="fill-white" />
              Donate ${displayAmount || "—"}{frequency === "monthly" ? "/mo" : ""}
            </a>

            {/* Fine print */}
            <p className="text-gray-600 text-xs text-center leading-relaxed">
              Donations support Open Source Kigali's community programs.
              <br />
              Payment processing coming soon · Stay tuned.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Donate;
