import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PoundSterling } from "lucide-react";

interface InflationFormProps {
  onCalculate: (data: { amount: number; inflationRate: number }) => void;
}

export const InflationForm = ({ onCalculate }: InflationFormProps) => {
  const [amount, setAmount] = useState<number>(10000);
  const [inflationRate, setInflationRate] = useState<number>(2);

  const handleCalculate = () => {
    onCalculate({ amount, inflationRate });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">See the impact of inflation over time</h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="amount">How much cash do you hold?</Label>
          <div className="mt-2 relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <PoundSterling className="h-5 w-5 text-gray-500" />
            </div>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="pl-10"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="inflationRate">Select an inflation rate</Label>
          <Select
            value={inflationRate.toString()}
            onValueChange={(value) => setInflationRate(Number(value))}
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select inflation rate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2%</SelectItem>
              <SelectItem value="3">3%</SelectItem>
              <SelectItem value="4">4%</SelectItem>
              <SelectItem value="5">5%</SelectItem>
              <SelectItem value="6">6%</SelectItem>
            </SelectContent>
          </Select>

          <p className="text-sm text-gray-600 mt-2">
            The Bank of England's long-term inflation target is 2%.
            As of January 2024, the UK's actual inflation is 4%.
          </p>
        </div>

        <Button 
          onClick={handleCalculate}
          className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black"
        >
          Recalculate
        </Button>

        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
          <p>
            This calculator is for illustration purposes only and values aren't guaranteed. 
            Bear in mind that inflation rates can rise and fall over time. This calculator 
            assumes a flat inflation rate over a ten-year period.
          </p>
          <p className="mt-4">
            Remember the value of investments and any income can go down as well as up, 
            so you could get back less than you invest.
          </p>
        </div>
      </div>
    </div>
  );
};
