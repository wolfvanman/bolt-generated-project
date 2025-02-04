import { Provider } from '../types';

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const calculateTieredAmount = (value: number, tiers: Provider['tiers'], previousThreshold = 0): number => {
  if (!tiers) return 0;
  
  let totalFee = 0;
  let remainingValue = value;

  for (const tier of tiers) {
    const tierLimit = tier.threshold - previousThreshold;
    const amountInTier = Math.min(remainingValue, tierLimit);
    
    if (amountInTier <= 0) break;
    
    totalFee += (amountInTier * tier.fee) / 100;
    remainingValue -= amountInTier;
    previousThreshold = tier.threshold;
  }

  return totalFee;
};

export const calculateAnnualFee = (provider: Provider, value: number): number => {
  let totalFee = 0;

  // Handle fixed fees
  if (provider.adminFee) totalFee += provider.adminFee;
  if (provider.setupFee) totalFee += provider.setupFee;
  if (provider.drawdownFee) totalFee += provider.drawdownFee;
  if (provider.monthlyFee) totalFee += provider.monthlyFee * 12;

  // Handle tiered percentage fees
  if (provider.tiers) {
    totalFee += calculateTieredAmount(value, provider.tiers);
  } else if (provider.flatFee) {
    totalFee = provider.flatFee;
  } else {
    totalFee += (value * provider.annualFee) / 100;
  }

  // Apply minimum fee if exists
  if (provider.minFee && totalFee < provider.minFee) {
    totalFee = provider.minFee;
  }

  // Apply maximum fee if exists
  if (provider.maxFee && totalFee > provider.maxFee) {
    totalFee = provider.maxFee;
  }

  return totalFee;
};

export const calculateTieredFee = (provider: Provider, value: number): string => {
  const calculations: string[] = [];
  let totalFee = 0;

  // Add fixed fees
  if (provider.adminFee) {
    totalFee += provider.adminFee;
    calculations.push(`Admin fee: ${formatCurrency(provider.adminFee)}`);
  }

  if (provider.setupFee) {
    totalFee += provider.setupFee;
    calculations.push(`Setup fee: ${formatCurrency(provider.setupFee)}`);
  }

  if (provider.drawdownFee) {
    totalFee += provider.drawdownFee;
    calculations.push(`Drawdown fee: ${formatCurrency(provider.drawdownFee)}`);
  }

  if (provider.monthlyFee) {
    const annualMonthlyFee = provider.monthlyFee * 12;
    totalFee += annualMonthlyFee;
    calculations.push(`Annual monthly fee: ${formatCurrency(annualMonthlyFee)} (${formatCurrency(provider.monthlyFee)}/month)`);
  }

  // Calculate percentage-based fees
  if (provider.flatFee) {
    totalFee = provider.flatFee;
    const percentageEquivalent = (provider.flatFee / value) * 100;
    calculations.push(`${formatCurrency(provider.flatFee)} flat fee (${percentageEquivalent.toFixed(3)}% of pot)`);
  } else if (provider.tiers) {
    let remainingValue = value;
    let previousThreshold = 0;
    let percentageFee = 0;

    for (const tier of provider.tiers) {
      const tierLimit = tier.threshold - previousThreshold;
      const amountInTier = Math.min(remainingValue, tierLimit);
      
      if (amountInTier <= 0) break;
      
      const tierFee = (amountInTier * tier.fee) / 100;
      percentageFee += tierFee;
      
      calculations.push(
        `${formatCurrency(amountInTier)} @ ${tier.fee}% = ${formatCurrency(tierFee)}`
      );
      
      remainingValue -= amountInTier;
      previousThreshold = tier.threshold;
    }

    totalFee += percentageFee;
  }

  // Apply minimum fee if exists
  if (provider.minFee && totalFee < provider.minFee) {
    calculations.push(`Minimum fee applied: ${formatCurrency(provider.minFee)}`);
    totalFee = provider.minFee;
  }

  // Apply maximum fee if exists
  if (provider.maxFee && totalFee > provider.maxFee) {
    calculations.push(`Maximum fee cap applied: ${formatCurrency(provider.maxFee)}`);
    totalFee = provider.maxFee;
  }

  const totalPercentage = (totalFee / value) * 100;
  calculations.push(`Total annual fee: ${formatCurrency(totalFee)} (${totalPercentage.toFixed(3)}% of pot)`);
  
  return calculations.join('\n');
};
