import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/drawdownCalculations";
import type { DrawdownResult } from "@/types/drawdown";

interface ScenarioProps {
  label: string;
  returnRate: string;
  color: string;
  amount: number;
  runOutAge: number;
}

interface ExampleReturnsProps {
  poorResults: DrawdownResult[];
  chosenResults: DrawdownResult[];
  goodResults: DrawdownResult[];
  chosenRate: number;
}

const Scenario = ({ label, returnRate, color, amount, runOutAge }: ScenarioProps) => (
  <Card className={`${color} text-white`}>
    <CardContent className="p-6 space-y-4">
      <div>
        <div className="text-lg font-medium">{label} ({returnRate})</div>
        <div className="text-sm opacity-90">Age your pension money could run out:</div>
      </div>
      <div className="text-4xl font-bold">{runOutAge}</div>
      <div className="text-sm">years old</div>
      <div>
        <div className="text-sm opacity-90">Amount left:</div>
        <div className="text-xl font-semibold">{formatCurrency(amount)}</div>
      </div>
    </CardContent>
  </Card>
);

const findRunOutAge = (results: DrawdownResult[]): number => {
  for (const result of results) {
    if (result.endingBalance <= 0) {
      return result.age;
    }
  }
  return 100; // If money never runs out
};

export const ExampleReturns = ({ poorResults, chosenResults, goodResults, chosenRate }: ExampleReturnsProps) => {
  const poorRunOutAge = findRunOutAge(poorResults);
  const chosenRunOutAge = findRunOutAge(chosenResults);
  const goodRunOutAge = findRunOutAge(goodResults);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Example Returns</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Scenario 
          label="Poor" 
          returnRate="-1%" 
          color="bg-[#F15A29]" 
          amount={poorResults[poorResults.length - 1]?.endingBalance || 0}
          runOutAge={poorRunOutAge}
        />
        <Scenario 
          label="Chosen" 
          returnRate={`${chosenRate}%`}
          color="bg-[#414B56]" 
          amount={chosenResults[chosenResults.length - 1]?.endingBalance || 0}
          runOutAge={chosenRunOutAge}
        />
        <Scenario 
          label="Good" 
          returnRate="8%" 
          color="bg-[#C8A87D]" 
          amount={goodResults[goodResults.length - 1]?.endingBalance || 0}
          runOutAge={goodRunOutAge}
        />
      </div>
    </div>
  );
};
