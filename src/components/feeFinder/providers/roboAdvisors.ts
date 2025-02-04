import { Provider } from '../types';

export const roboAdvisors: Provider[] = [
  {
    name: 'PensionBee',
    annualFee: 0.50,
    breakdown: [
      'Tiered percentage fee structure:',
      'First £100,000: 0.50%',
      'Funds over £100,000: 0.25%'
    ],
    tiers: [
      { threshold: 100000, fee: 0.50 },
      { threshold: Infinity, fee: 0.25 }
    ]
  },
  {
    name: "People's Pension",
    annualFee: 0.50,
    breakdown: [
      'Annual management charge: 0.50%',
      'Rebates:',
      'Up to £3,000: no rebate',
      'Over £3,000 to £10,000: 0.1% rebate',
      'Over £10,000 to £25,000: 0.2% rebate',
      'Over £25,000 to £50,000: 0.25% rebate',
      'Over £50,000: 0.3% rebate'
    ],
    tiers: [
      { threshold: 3000, fee: 0.50 },
      { threshold: 10000, fee: 0.40 },
      { threshold: 25000, fee: 0.30 },
      { threshold: 50000, fee: 0.25 },
      { threshold: Infinity, fee: 0.20 }
    ]
  }
];
