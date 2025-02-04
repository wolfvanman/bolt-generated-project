import { CalculationResults, InvestmentType } from "@/types/costOfDelay";

interface ResultsDisplayProps {
  results: CalculationResults;
  investmentType: InvestmentType;
}

export const ResultsDisplay = ({ results, investmentType }: ResultsDisplayProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(investmentType === 'monthly' ? value : value);
  };

  const renderAmount = (amount: number, difference: number) => (
    <>
      <p className="text-2xl font-bold">{formatCurrency(amount)}</p>
      {difference > 0 && (
        <p className="text-sm text-primary">
          {formatCurrency(difference)} more than if you started today
        </p>
      )}
    </>
  );

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">
        You would need to {investmentType === 'monthly' ? 'invest monthly' : 'invest'}...
      </h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-gray-500">If you start today</h3>
          {renderAmount(results.today, 0)}
        </div>

        <div>
          <h3 className="text-sm text-gray-500">If you wait 1 year</h3>
          {renderAmount(results.oneYear, results.oneYear - results.today)}
        </div>

        <div>
          <h3 className="text-sm text-gray-500">If you wait 5 years</h3>
          {renderAmount(results.fiveYears, results.fiveYears - results.today)}
        </div>

        <div>
          <h3 className="text-sm text-gray-500">If you wait 10 years</h3>
          {renderAmount(results.tenYears, results.tenYears - results.today)}
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-600">
          This calculator uses a 2% annual compound growth rate for all calculations.
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Remember the value of investments and any income can go down as well as up, 
          so you could get back less than you invest. Tax rules can change, and the value 
          of any benefits depend on your circumstances.
        </p>
      </div>
    </div>
  );
};
