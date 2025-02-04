import { Card, CardContent } from "@/components/ui/card";

interface PensionSummaryProps {
  totalPensionValue: number;
  totalCharges: number;
  averageChargeRate: number;
}

const PensionSummary = ({
  totalPensionValue,
  totalCharges,
  averageChargeRate,
}: PensionSummaryProps) => {
  return (
    <Card className="bg-muted border-primary/20">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Current Pension Summary</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
              <span className="text-primary-muted">Total Pension Value:</span>
              <span className="text-white font-medium">
                £{totalPensionValue.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
              <span className="text-primary-muted">Total Annual Charges:</span>
              <span className="text-white font-medium">
                £{totalCharges.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
              <span className="text-primary-muted">Average Charge Rate:</span>
              <span className="text-white font-medium">
                {averageChargeRate.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PensionSummary;
