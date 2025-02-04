import { Pension } from "@/types/pension";

export const calculateTotalPensionValue = (pensions: Pension[]) => {
  return pensions.reduce((total, pension) => total + pension.amount, 0);
};

export const calculateTotalCharges = (pensions: Pension[]) => {
  return pensions.reduce((total, pension) => {
    const chargeAmount = pension.isPercentage
      ? (pension.amount * pension.ter) / 100
      : pension.ter;
    return total + chargeAmount;
  }, 0);
};

export const calculateAverageChargeRate = (pensions: Pension[]) => {
  const totalValue = calculateTotalPensionValue(pensions);
  return totalValue > 0 ? (calculateTotalCharges(pensions) / totalValue) * 100 : 0;
};

export const calculateConsolidatedCharges = (totalValue: number, consolidatedRate: number) => {
  return (totalValue * consolidatedRate) / 100;
};

export const calculateAnnualSavings = (
  totalCharges: number,
  consolidatedCharges: number
) => {
  return totalCharges - consolidatedCharges;
};
