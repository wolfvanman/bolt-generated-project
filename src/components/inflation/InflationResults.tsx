import { Button } from "@/components/ui/button";

interface InflationResultsProps {
  results: {
    oneYear: number;
    fiveYears: number;
    tenYears: number;
  };
}

export const InflationResults = ({ results }: InflationResultsProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-primary">
        What will your money be worth
      </h2>
      
      <div className="space-y-8">
        <div>
          <p className="text-sm text-muted-foreground">The buying power of your cash over time</p>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">In 1 year</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(results.oneYear)}</p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">In 5 years</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(results.fiveYears)}</p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">In 10 years</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(results.tenYears)}</p>
          </div>
        </div>

        <div className="pt-6 border-t border-primary/20">
          <h3 className="text-lg font-semibold text-primary mb-2">Ready to do more with your money?</h3>
          <p className="text-sm text-muted-foreground">
            You've seen how inflation can erode the value of cash. But investing could help 
            you grow your money, to combat the effects of inflation.
          </p>
          <Button 
            variant="link" 
            className="mt-4 text-primary hover:text-primary-light"
          >
            Choose your investment →
          </Button>
        </div>
      </div>
    </div>
  );
};
