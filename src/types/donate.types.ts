export type DonatePlanKey = "one-time" | "monthly";

export interface DonateAmount {
  /** Amount in USD. */
  amount: number;
  /** Flutterwave payment link for this fixed amount. Empty until live. */
  url: string;
}

export interface DonatePlan {
  key: DonatePlanKey;
  label: string;
  /** Short line under the tabs explaining this plan. */
  blurb: string;
  presets: DonateAmount[];
  /** Flutterwave link where the donor types their own amount. Empty until live. */
  customUrl: string;
}
