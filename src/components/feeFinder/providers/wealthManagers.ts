import { Provider } from '../types';

export const wealthManagers: Provider[] = [
  {
    name: 'Bestinvest',
    annualFee: 0.40,
    breakdown: [
      'Tiered percentage fee structure:',
      'Up to £250,000: 0.40%',
      '£250,001 - £500,000: 0.20%',
      '£500,001-£1m: 0.10%',
      'Over £1m: No charge'
    ],
    tiers: [
      { threshold: 250000, fee: 0.40 },
      { threshold: 500000, fee: 0.20 },
      { threshold: 1000000, fee: 0.10 },
      { threshold: Infinity, fee: 0 }
    ]
  },
  {
    name: 'Close Brothers',
    annualFee: 0.25,
    breakdown: [
      'Annual admin fee: £180',
      'Tiered percentage fee structure:',
      'First £500,000: 0.25%',
      'Next £500,000: 0.20%',
      'Next £500,000: 0.10%',
      '£1.5m+: No charge'
    ],
    adminFee: 180,
    tiers: [
      { threshold: 500000, fee: 0.25 },
      { threshold: 1000000, fee: 0.20 },
      { threshold: 1500000, fee: 0.10 },
      { threshold: Infinity, fee: 0 }
    ]
  },
  {
    name: 'EQi',
    annualFee: 0.30,
    breakdown: [
      'Annual admin fee: £118.80',
      'Annual drawdown fee: £180',
      'Tiered percentage fee structure:',
      'First £50,000: 0.30%',
      '£50,000.01-£250,000: 0.25%',
      '£250,000+: 0.15% (max £250 per quarter)'
    ],
    adminFee: 118.80,
    drawdownFee: 180,
    maxFee: 1000, // £250 per quarter = £1000 per year
    tiers: [
      { threshold: 50000, fee: 0.30 },
      { threshold: 250000, fee: 0.25 },
      { threshold: Infinity, fee: 0.15 }
    ]
  },
  {
    name: 'Quilter',
    annualFee: 0.35,
    breakdown: [
      'Tiered percentage fee structure:',
      'First £50,000: 0.35%',
      '£50,000 to £250,000: 0.25%',
      '£250,000 to £750,000: 0.20%',
      '£750,000+: 0.15%'
    ],
    tiers: [
      { threshold: 50000, fee: 0.35 },
      { threshold: 250000, fee: 0.25 },
      { threshold: 750000, fee: 0.20 },
      { threshold: Infinity, fee: 0.15 }
    ]
  }
];
