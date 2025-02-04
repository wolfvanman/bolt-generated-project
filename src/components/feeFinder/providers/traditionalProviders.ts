import { CategoryProvider } from './types';

export const traditionalProviders: CategoryProvider[] = [
  {
    name: "Hargreaves Lansdown",
    category: "Traditional",
    annualFee: 0.45, // Base annual fee
    tiers: [
      { threshold: 250000, fee: 0.45 },
      { threshold: 1000000, fee: 0.25 },
      { threshold: 2000000, fee: 0.1 },
      { threshold: Infinity, fee: 0 }
    ],
    breakdown: [
      "First £250,000: 0.45%",
      "£250,000 to £1m: 0.25%",
      "£1m to £2m: 0.1%",
      "Over £2m: no charge"
    ]
  },
  {
    name: "AJ Bell Youinvest",
    category: "Traditional",
    annualFee: 0.25, // Base annual fee
    tiers: [
      { threshold: 250000, fee: 0.25 },
      { threshold: 500000, fee: 0.1 },
      { threshold: Infinity, fee: 0 }
    ],
    breakdown: [
      "First £0 - £250,000: 0.25%",
      "Next £250,000-£500,00: 0.1%",
      "Value over £500,000: No charge"
    ]
  },
  {
    name: "Interactive Investor",
    category: "Traditional",
    annualFee: 0.1588, // £155.88 / £100,000 * 100 to get percentage
    flatFee: 155.88, // £12.99 * 12
    breakdown: [
      "Flat fee structure:",
      "Up to £50,000: £5.99/month",
      "Over £50,000: £12.99/month",
      "No income withdrawal charges"
    ]
  },
  {
    name: "Fidelity Personal Investing",
    category: "Traditional",
    annualFee: 0.35, // Base annual fee
    tiers: [
      { threshold: 250000, fee: 0.35 },
      { threshold: 1000000, fee: 0.20 },
      { threshold: Infinity, fee: 0 }
    ],
    breakdown: [
      "0.35% up to £250,000",
      "0.20% for £250,000 up to £1 million",
      "No service fee above £1 million"
    ]
  },
  {
    name: "Vanguard",
    category: "Traditional",
    annualFee: 0.15,
    monthlyFee: 4,
    maxFee: 375,
    breakdown: [
      "Account fee of £4 a month for pots up to £32,000",
      "0.15% annual fee for pots over £32,000",
      "Maximum fee capped at £375 per year",
      "Additional 0.3% management fee if Vanguard manages investments"
    ]
  },
  {
    name: "Legal & General",
    category: "Traditional",
    annualFee: 0.25,
    breakdown: [
      "Annual service charge of 0.25%",
      "Fund management charge varies between 0.14% and 0.31%"
    ]
  }
];
