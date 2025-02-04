import { Provider } from '@/components/feeFinder/types';

export const calculateAnnualFee = (provider: Provider, value: number): number => {
  let totalFee = 0;

  // Add fixed fees
  if (provider.adminFee) totalFee += provider.adminFee;
  if (provider.setupFee) totalFee += provider.setupFee;
  if (provider.monthlyFee) totalFee += provider.monthlyFee * 12;

  // Calculate tiered fees
  if (provider.tiers) {
    let remainingValue = value;
    let previousThreshold = 0;

    for (const tier of provider.tiers) {
      const tierLimit = tier.threshold - previousThreshold;
      const amountInTier = Math.min(remainingValue, tierLimit);
      
      if (amountInTier <= 0) break;
      
      totalFee += (amountInTier * tier.fee) / 100;
      remainingValue -= amountInTier;
      previousThreshold = tier.threshold;
    }
  } else if (provider.flatFee) {
    totalFee = provider.flatFee;
  } else if (provider.annualFee) {
    totalFee += (value * provider.annualFee) / 100;
  }

  // Apply min/max fees
  if (provider.minFee && totalFee < provider.minFee) {
    totalFee = provider.minFee;
  }
  if (provider.maxFee && totalFee > provider.maxFee) {
    totalFee = provider.maxFee;
  }

  return totalFee;
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
