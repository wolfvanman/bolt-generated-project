import { CategoryProvider } from './types';

export const bankProviders: CategoryProvider[] = [
  {
    name: "Barclays Smart Investor",
    category: "Bank",
    annualFee: 0.25, // Base annual fee
    tiers: [
      { threshold: 200000, fee: 0.25 },
      { threshold: Infinity, fee: 0.05 }
    ],
    adminFee: 125,
    setupFee: 75,
    breakdown: [
      "Annual admin fee of £125",
      "Drawdown set-up fee of £75",
      "0.25% on investments up to £200,000",
      "0.05% on investments above £200,000"
    ]
  },
  {
    name: "HSBC InvestDirect",
    category: "Bank",
    annualFee: 0.3, // Base annual fee
    tiers: [
      { threshold: 100000, fee: 0.3 },
      { threshold: Infinity, fee: 0.1 }
    ],
    adminFee: 100,
    setupFee: 50,
    breakdown: [
      "Annual admin fee of £100",
      "Drawdown set-up fee of £50",
      "0.3% on investments up to £100,000",
      "0.1% on investments above £100,000"
    ]
  },
  {
    name: "Lloyds Bank Investment Account",
    category: "Bank",
    annualFee: 0.2, // Base annual fee
    tiers: [
      { threshold: 150000, fee: 0.2 },
      { threshold: Infinity, fee: 0.1 }
    ],
    adminFee: 150,
    setupFee: 60,
    breakdown: [
      "Annual admin fee of £150",
      "Drawdown set-up fee of £60",
      "0.2% on investments up to £150,000",
      "0.1% on investments above £150,000"
    ]
  },
  {
    name: "NatWest Invest",
    category: "Bank",
    annualFee: 0.25, // Base annual fee
    tiers: [
      { threshold: 250000, fee: 0.25 },
      { threshold: Infinity, fee: 0.05 }
    ],
    adminFee: 120,
    setupFee: 70,
    breakdown: [
      "Annual admin fee of £120",
      "Drawdown set-up fee of £70",
      "0.25% on investments up to £250,000",
      "0.05% on investments above £250,000"
    ]
  },
  {
    name: "Santander Investment Hub",
    category: "Bank",
    annualFee: 0.3, // Base annual fee
    tiers: [
      { threshold: 300000, fee: 0.3 },
      { threshold: Infinity, fee: 0.1 }
    ],
    adminFee: 130,
    setupFee: 80,
    breakdown: [
      "Annual admin fee of £130",
      "Drawdown set-up fee of £80",
      "0.3% on investments up to £300,000",
      "0.1% on investments above £300,000"
    ]
  },
  {
    name: "Halifax",
    category: "Bank",
    annualFee: 0.25,
    maxFee: 198, // £16.50 per month * 12
    breakdown: [
      "Annual admin fee of 0.25% (capped at £16.50 per month)",
      "No transfer or drawdown charges"
    ]
  }
];
