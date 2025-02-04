import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Home } from "lucide-react";
import { InvestmentForm } from "@/components/costOfDelay/InvestmentForm";
import { ResultsDisplay } from "@/components/costOfDelay/ResultsDisplay";
import { calculateResults } from "@/utils/costOfDelayCalculations";
import { CalculationResults, InvestmentInputs } from "@/types/costOfDelay";

const CostOfDelayCalculator = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<InvestmentInputs>({
    targetAmount: 50000,
    timeHorizon: 20,
    investmentType: 'lump'
  });

  const [results, setResults] = useState<CalculationResults>({
    today: 0,
    oneYear: 0,
    fiveYears: 0,
    tenYears: 0
  });

  useEffect(() => {
    const newResults = calculateResults(
      inputs.targetAmount,
      inputs.timeHorizon,
      inputs.investmentType
    );
    setResults(newResults);
  }, [inputs]);

  const handleInputChange = (newInputs: Partial<InvestmentInputs>) => {
    setInputs(prev => ({ ...prev, ...newInputs }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2A2E36] p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-white">COST OF</span>
            <span className="text-[#C8A87D]"> DELAY CALCULATOR</span>
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
              <InvestmentForm 
                inputs={inputs}
                onInputChange={handleInputChange}
              />
            </CardContent>
          </Card>

          <Card className="bg-primary-soft">
            <CardContent className="p-6">
              <ResultsDisplay 
                results={results}
                investmentType={inputs.investmentType}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CostOfDelayCalculator;
