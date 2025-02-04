import { CalculationResults, InvestmentType } from "../types/costOfDelay";

const GROWTH_RATE = 0.02; // 2% annual growth rate

export const calculateResults = (
  targetAmount: number,
  timeHorizon: number,
  investmentType: InvestmentType
): CalculationResults => {
  if (investmentType === 'lump') {
    return calculateLumpSumResults(targetAmount, timeHorizon);
  }
  return calculateMonthlyPaymentResults(targetAmount, timeHorizon);
};

const calculateLumpSumResults = (futureValue: number, totalYears: number): CalculationResults => {
  const calculatePresentValue = (years: number) => {
    if (years <= 0) return futureValue;
    return futureValue / Math.pow(1 + GROWTH_RATE, years);
  };

  return {
    today: calculatePresentValue(totalYears),
    oneYear: calculatePresentValue(totalYears - 1),
    fiveYears: calculatePresentValue(totalYears - 5),
    tenYears: calculatePresentValue(totalYears - 10)
  };
};

const calculateMonthlyPaymentResults = (futureValue: number, totalYears: number): CalculationResults => {
  const calculateMonthlyPayment = (years: number) => {
    if (years <= 0) return futureValue;
    const monthlyRate = GROWTH_RATE / 12;
    const numberOfPayments = years * 12;
    return (futureValue * monthlyRate) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  };

  return {
    today: calculateMonthlyPayment(totalYears),
    oneYear: calculateMonthlyPayment(totalYears - 1),
    fiveYears: calculateMonthlyPayment(totalYears - 5),
    tenYears: calculateMonthlyPayment(totalYears - 10)
  };
};
