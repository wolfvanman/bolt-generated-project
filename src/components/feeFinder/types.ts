export interface TierStructure {
  threshold: number;
  fee: number;
}

export interface Provider {
  name: string;
  annualFee: number;
  breakdown?: string[];
  tiers?: TierStructure[];
  flatFee?: number;
  minFee?: number;
  maxFee?: number;
  monthlyFee?: number;
  setupFee?: number;
  adminFee?: number;
  drawdownFee?: number;
  payrollFee?: number;
}
