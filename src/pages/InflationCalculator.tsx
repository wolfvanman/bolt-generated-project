import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InflationForm } from "@/components/inflation/InflationForm";
import { InflationResults } from "@/components/inflation/InflationResults";
import { useState } from "react";

interface InflationData {
  amount: number;
  inflationRate: number;
}

const InflationCalculator = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState({
    oneYear: 0,
    fiveYears: 0,
    tenYears: 0
  });

  const calculateInflationImpact = (data: InflationData) => {
    const { amount, inflationRate } = data;
    const rate = inflationRate / 100;

    setResults({
      oneYear: amount * Math.pow(1 - rate, 1),
      fiveYears: amount * Math.pow(1 - rate, 5),
      tenYears: amount * Math.pow(1 - rate, 10)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2A2E36] p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-white">INFLATION</span>
            <span className="text-[#C8A87D]"> CALCULATOR</span>
          </h1>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:text-[#C8A87D]"
          >
            <Home className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-primary-light">
            <CardContent className="p-6">
              <InflationForm onCalculate={calculateInflationImpact} />
            </CardContent>
          </Card>

          <Card className="bg-primary-soft">
            <CardContent className="p-6">
              <InflationResults results={results} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InflationCalculator;
