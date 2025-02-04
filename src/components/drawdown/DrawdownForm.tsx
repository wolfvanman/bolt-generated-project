import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface DrawdownFormProps {
  initialPortfolio: number;
  setInitialPortfolio: (value: number) => void;
  monthlyIncome: number;
  setMonthlyIncome: (value: number) => void;
  currentAge: number;
  setCurrentAge: (value: number) => void;
  chosenGrowthRate: number;
  setChosenGrowthRate: (value: number) => void;
}

export const DrawdownForm = ({
  initialPortfolio,
  setInitialPortfolio,
  monthlyIncome,
  setMonthlyIncome,
  currentAge,
  setCurrentAge,
  chosenGrowthRate,
  setChosenGrowthRate,
}: DrawdownFormProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="currentAge">Current Age</Label>
          <Input 
            id="currentAge" 
            type="number" 
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="pensionSize">Current Pension Fund Size</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
            <Input 
              id="pensionSize"
              type="number"
              value={initialPortfolio}
              onChange={(e) => setInitialPortfolio(Number(e.target.value))}
              className="pl-7"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="monthlyIncome">Monthly Income Required</Label>
          <div className="relative mt-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
            <Input 
              id="monthlyIncome"
              type="number"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(Number(e.target.value))}
              className="pl-7"
            />
          </div>
        </div>

        <div>
          <Label>Chosen Growth Rate: {chosenGrowthRate}%</Label>
          <Slider
            value={[chosenGrowthRate]}
            onValueChange={(value) => setChosenGrowthRate(value[0])}
            min={-2}
            max={10}
            step={0.5}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};
