export interface DrawdownResult {
  year: number;
  age: number;
  startingBalance: number;
  withdrawal: number;
  investmentReturn: number;
  endingBalance: number;
}

export const calculateDrawdown = (
  initialPortfolio: number,
  annualIncome: number,
  currentAge: number,
  _inflationRate: number = 2, // Kept but unused for backward compatibility
  investmentReturn: number = 7
): DrawdownResult[] => {
  const results: DrawdownResult[] = [];
  let currentBalance = initialPortfolio;
  const currentWithdrawal = annualIncome;

  for (let year = 0; currentBalance > 0 && year < 40; year++) {
    // Calculate investment returns before withdrawal
    const returns = currentBalance * (investmentReturn / 100);
    
    // Calculate ending balance after returns and withdrawal
    const endingBalance = Math.max(0, currentBalance + returns - currentWithdrawal);

    results.push({
      year,
      age: currentAge + year,
      startingBalance: currentBalance,
      withdrawal: currentWithdrawal,
      investmentReturn: returns,
      endingBalance,
    });

    if (endingBalance <= 0) break;
    currentBalance = endingBalance;
  }

  return results;
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
