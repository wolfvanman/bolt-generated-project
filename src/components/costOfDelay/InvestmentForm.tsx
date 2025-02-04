import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PoundSterling, Calendar } from "lucide-react";
import { InvestmentInputs, InvestmentType } from "@/types/costOfDelay";

interface InvestmentFormProps {
  inputs: InvestmentInputs;
  onInputChange: (inputs: Partial<InvestmentInputs>) => void;
}

export const InvestmentForm = ({ inputs, onInputChange }: InvestmentFormProps) => {
  const handleInvestmentTypeChange = (type: InvestmentType) => {
    onInputChange({ investmentType: type });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-6">Your Investment</h2>
      <div>
        <Label htmlFor="targetAmount">What's your target amount?</Label>
        <div className="mt-2 relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <PoundSterling className="h-5 w-5 text-gray-500" />
          </div>
          <Input
            id="targetAmount"
            type="number"
            value={inputs.targetAmount}
            onChange={(e) => onInputChange({ targetAmount: Number(e.target.value) })}
            className="pl-10 max-w-[200px]"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="timeHorizon">How long do you have to reach this target?</Label>
        <div className="flex items-center mt-2 gap-2">
          <div className="relative flex-1 max-w-[100px]">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
            <Input
              id="timeHorizon"
              type="number"
              value={inputs.timeHorizon}
              onChange={(e) => onInputChange({ timeHorizon: Number(e.target.value) })}
              className="pl-10"
            />
          </div>
          <span>years</span>
        </div>
      </div>

      <div>
        <Label>How do you want to invest?</Label>
        <div className="flex gap-4 mt-2">
          <Button
            variant={inputs.investmentType === 'lump' ? 'default' : 'outline'}
            onClick={() => handleInvestmentTypeChange('lump')}
            className="flex-1"
          >
            Single lump sum
          </Button>
          <Button
            variant={inputs.investmentType === 'monthly' ? 'default' : 'outline'}
            onClick={() => handleInvestmentTypeChange('monthly')}
            className="flex-1"
          >
            Monthly payments
          </Button>
        </div>
      </div>
    </div>
  );
};
