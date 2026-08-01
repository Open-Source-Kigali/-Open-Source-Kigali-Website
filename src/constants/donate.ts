import type { DonatePlan } from "@/types";

export const DONATE_CURRENCY = "USD";

export const ONE_TIME_PLAN: DonatePlan = {
  key: "one-time",
  label: "One-time",
  blurb: "Give once, with a card or mobile money.",
  presets: [
    { amount: 10, url: "" },
    { amount: 25, url: "" },
    { amount: 50, url: "" },
  ],
  customUrl: "",
};

export const MONTHLY_PLAN: DonatePlan = {
  key: "monthly",
  label: "Monthly",
  blurb: "Support us every month. Card only, cancel any time.",
  presets: [
    { amount: 25, url: "" },
    { amount: 50, url: "" },
    { amount: 100, url: "" },
  ],
  customUrl: "",
};

export const DONATE_PLANS: DonatePlan[] = [ONE_TIME_PLAN, MONTHLY_PLAN];
