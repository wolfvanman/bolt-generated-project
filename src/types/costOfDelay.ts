export type InvestmentType = 'lump' | 'monthly';

export interface CalculationResults {
  today: number;
  oneYear: number;
  fiveYears: number;
  tenYears: number;
}

export interface InvestmentInputs {
  targetAmount: number;
  timeHorizon: number;
  investmentType: InvestmentType;
}
