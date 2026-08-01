import type { DonateTier } from "@/types";

export const MONTHLY_TIERS: DonateTier[] = [
  {
    id: "supporter",
    name: "Supporter",
    amount: 5000,
    currency: "RWF",
    interval: "monthly",
    description: "For students and first time donors.",
    methods: "Card",
    url: "",
  },
  {
    id: "contributor",
    name: "Contributor",
    amount: 15000,
    currency: "RWF",
    interval: "monthly",
    description: "Our most common plan.",
    methods: "Card",
    url: "",
    featured: true,
  },
  {
    id: "sustainer",
    name: "Sustainer",
    amount: 50000,
    currency: "RWF",
    interval: "monthly",
    description: "For companies and senior engineers.",
    methods: "Card",
    url: "",
  },
];

export const ONE_TIME_TIER: DonateTier = {
  id: "one-time",
  name: "One-time donation",
  amount: null,
  currency: "RWF",
  interval: "one-time",
  description: "Give any amount, once. No commitment.",
  methods: "Card and mobile money",
  url: "",
};
