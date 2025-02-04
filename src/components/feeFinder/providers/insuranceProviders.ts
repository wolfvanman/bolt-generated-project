import { Provider } from '../types';

export const insuranceProviders: Provider[] = [
  {
    name: 'Aegon',
    annualFee: 0.60,
    breakdown: [
      'Annual admin fee: £75',
      'Tiered percentage fee structure:',
      'First £29,999.99: 0.60%',
      '£30,000 to £49,999.99: 0.55%',
      '£50,000 to £99,999.99: 0.50%',
      '£100,000 to £249,999.99: 0.45%',
      '£250,000 and over: 0%'
    ],
    adminFee: 75,
    tiers: [
      { threshold: 29999.99, fee: 0.60 },
      { threshold: 49999.99, fee: 0.55 },
      { threshold: 99999.99, fee: 0.50 },
      { threshold: 249999.99, fee: 0.45 },
      { threshold: Infinity, fee: 0 }
    ]
  },
  {
    name: 'Aviva',
    annualFee: 0.40,
    breakdown: [
      'No drawdown set-up or withdrawal charges',
      'Tiered percentage fee structure:',
      'Up to £49,999: 0.40%',
      '£50,000 to £249,999: 0.35%',
      '£250,000 to £499,999: 0.25%',
      '£500,000 and over: No charge'
    ],
    tiers: [
      { threshold: 49999, fee: 0.40 },
      { threshold: 249999, fee: 0.35 },
      { threshold: 499999, fee: 0.25 },
      { threshold: Infinity, fee: 0 }
    ]
  },
  {
    name: 'Prudential',
    annualFee: 0.30,
    breakdown: [
      'Tiered percentage fee structure:',
      'Up to £99,999: 0.30%',
      '£100,000 to £249,999: 0.20%',
      '£250,000 to £749,999: 0.15%',
      '£750,000 to £999,999: 0.125%',
      '£1m or above: 0.10%'
    ],
    tiers: [
      { threshold: 99999, fee: 0.30 },
      { threshold: 249999, fee: 0.20 },
      { threshold: 749999, fee: 0.15 },
      { threshold: 999999, fee: 0.125 },
      { threshold: Infinity, fee: 0.10 }
    ]
  },
  {
    name: 'Royal London',
    annualFee: 1.00,
    breakdown: [
      'Base charge: 1.00%',
      'Discounts applied to entire pension pot:',
      '£0-£44,900: 0.10% discount (0.90% effective)',
      '£44,901-£89,900: 0.50% discount (0.50% effective)',
      '£89,901-£269,000: 0.55% discount (0.45% effective)',
      '£269,001-£899,000: 0.60% discount (0.40% effective)',
      '£899,000+: 0.65% discount (0.35% effective)'
    ],
    tiers: [
      { threshold: 44900, fee: 0.90 },
      { threshold: 89900, fee: 0.50 },
      { threshold: 269000, fee: 0.45 },
      { threshold: 899000, fee: 0.40 },
      { threshold: Infinity, fee: 0.35 }
    ]
  },
  {
    name: 'Standard Life',
    annualFee: 1.02,
    breakdown: [
      'Base charge: 1.02%',
      'Discounts:',
      'Up to £25,000: 0.30% discount (0.72% effective)',
      '£25,000+: 0.50% discount (0.52% effective)'
    ],
    tiers: [
      { threshold: 25000, fee: 0.72 },
      { threshold: Infinity, fee: 0.52 }
    ]
  }
];
