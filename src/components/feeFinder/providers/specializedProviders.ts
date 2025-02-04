import { Provider } from '../types';

export const specializedProviders: Provider[] = [
  {
    name: 'Advance by Embark',
    annualFee: 0.35,
    breakdown: [
      'Annual SIPP admin fee: £75',
      'Tiered percentage fee structure:',
      'First £100,000: 0.35%',
      'Next £150,000: 0.30%',
      'Next £250,000: 0.25%',
      '£500,000+: 0.10%'
    ],
    adminFee: 75,
    tiers: [
      { threshold: 100000, fee: 0.35 },
      { threshold: 250000, fee: 0.30 },
      { threshold: 500000, fee: 0.25 },
      { threshold: Infinity, fee: 0.10 }
    ]
  },
  {
    name: 'Charles Stanley Direct',
    annualFee: 0.35,
    breakdown: [
      'Drawdown fee: £180',
      'Regular income payroll charge: £60',
      'One-off payment charge: £30',
      'SIPP admin charge: £120 (if under £30,000)',
      'Tiered percentage fee structure:',
      'Up to £250,000: 0.35%',
      '£250,001-£499,999: 0.20%',
      '£500,000-£999,999: 0.15%',
      '£1m-£2m: 0.05%',
      '£2m+: No charge'
    ],
    drawdownFee: 180,
    payrollFee: 60,
    adminFee: 120,
    tiers: [
      { threshold: 250000, fee: 0.35 },
      { threshold: 499999, fee: 0.20 },
      { threshold: 999999, fee: 0.15 },
      { threshold: 2000000, fee: 0.05 },
      { threshold: Infinity, fee: 0 }
    ]
  },
  {
    name: 'M&G Wealth Platform',
    annualFee: 0.30,
    breakdown: [
      'Tiered percentage fee structure:',
      'First £1m: 0.30%',
      'Next £2m: 0.10%',
      'Next £2m: 0.06%'
    ],
    tiers: [
      { threshold: 1000000, fee: 0.30 },
      { threshold: 3000000, fee: 0.10 },
      { threshold: 5000000, fee: 0.06 },
      { threshold: Infinity, fee: 0.06 }
    ]
  },
  {
    name: 'Nucleus',
    annualFee: 0.33,
    breakdown: [
      'Tiered percentage fee structure:',
      'First £200,000: 0.33%',
      'Next £300,000: 0.30%',
      'Next £500,000: 0.175%',
      '£1m+: 0.05%'
    ],
    tiers: [
      { threshold: 200000, fee: 0.33 },
      { threshold: 500000, fee: 0.30 },
      { threshold: 1000000, fee: 0.175 },
      { threshold: Infinity, fee: 0.05 }
    ]
  }
];
