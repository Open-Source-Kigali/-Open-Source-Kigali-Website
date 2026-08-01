export type DonateInterval = "monthly" | "one-time";

export interface DonateTier {
  id: string;
  name: string;
  /** null means the donor types their own amount */
  amount: number | null;
  currency: string;
  interval: DonateInterval;
  description: string;
  methods: string;
  /** Flutterwave payment link. Empty until the account is live. */
  url: string;
  featured?: boolean;
}
