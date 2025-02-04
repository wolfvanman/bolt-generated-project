import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ConsolidationSummaryProps {
  consolidatedRate: number;
  onConsolidatedRateChange: (rate: number) => void;
  consolidatedCharges: number;
  annualSavings: number;
}

const ConsolidationSummary = ({
  consolidatedRate,
  onConsolidatedRateChange,
  consolidatedCharges,
  annualSavings,
}: ConsolidationSummaryProps) => {
  return (
    <Card className="bg-muted border-primary/20">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">If You Consolidated</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="consolidatedRate" className="text-primary-muted">
                Consolidated Rate (%)
              </Label>
              <Input
                id="consolidatedRate"
                type="number"
                value={consolidatedRate}
                onChange={(e) => onConsolidatedRateChange(parseFloat(e.target.value) || 0)}
                className="text-secondary bg-white"
                step="0.01"
              />
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
              <span className="text-primary-muted">Consolidated Annual Charge:</span>
              <span className="text-white font-medium">
                £{consolidatedCharges.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-secondary/50">
              <span className="text-primary-muted">Potential Annual Savings:</span>
              <span className="text-white font-medium">
                £{annualSavings.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsolidationSummary;
