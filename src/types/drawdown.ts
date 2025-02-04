export interface DrawdownResult {
  year: number;
  startingBalance: number;
  withdrawal: number;
  investmentReturn: number;
  endingBalance: number;
  age: number;
}

export interface DrawdownFormData {
  initialPortfolio: number;
  monthlyIncome: number;
  currentAge: number;
}
