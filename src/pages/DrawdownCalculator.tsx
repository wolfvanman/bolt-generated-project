import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { InfoBanner } from "@/components/drawdown/InfoBanner";
import { InflationBanner } from "@/components/drawdown/InflationBanner";
import { DrawdownForm } from "@/components/drawdown/DrawdownForm";
import { DrawdownChart } from "@/components/drawdown/DrawdownChart";
import { ExampleReturns } from "@/components/drawdown/ExampleReturns";
import { calculateDrawdown } from "@/utils/drawdownCalculations";
import type { DrawdownResult } from "@/types/drawdown";
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const DrawdownCalculator = () => {
  const navigate = useNavigate();
  const [initialPortfolio, setInitialPortfolio] = useState<number>(1000000);
  const [monthlyIncome, setMonthlyIncome] = useState<number>(4000);
  const [currentAge, setCurrentAge] = useState<number>(55);
  const [inflationRate, setInflationRate] = useState<number>(2);
  const [chosenGrowthRate, setChosenGrowthRate] = useState<number>(5);
  const [results, setResults] = useState<DrawdownResult[]>([]);
  const [poorResults, setPoorResults] = useState<DrawdownResult[]>([]);
  const [goodResults, setGoodResults] = useState<DrawdownResult[]>([]);

  useEffect(() => {
    const annualIncome = monthlyIncome * 12;
    
    // Calculate results for chosen rate
    const drawdownResults = calculateDrawdown(
      initialPortfolio,
      annualIncome,
      currentAge,
      inflationRate,
      chosenGrowthRate
    );
    setResults(drawdownResults);

    // Calculate poor scenario (-1%)
    const poorScenario = calculateDrawdown(
      initialPortfolio,
      annualIncome,
      currentAge,
      inflationRate,
      -1
    );
    setPoorResults(poorScenario);

    // Calculate good scenario (8%)
    const goodScenario = calculateDrawdown(
      initialPortfolio,
      annualIncome,
      currentAge,
      inflationRate,
      8
    );
    setGoodResults(goodScenario);
  }, [initialPortfolio, monthlyIncome, inflationRate, chosenGrowthRate, currentAge]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2A2E36] p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-white">PENSION DRAWDOWN</span>
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

      <div className="container mx-auto p-4 space-y-8">
        <Card className="mt-8">
          <CardContent className="p-6">
            <InfoBanner />
            <DrawdownForm
              initialPortfolio={initialPortfolio}
              setInitialPortfolio={setInitialPortfolio}
              monthlyIncome={monthlyIncome}
              setMonthlyIncome={setMonthlyIncome}
              currentAge={currentAge}
              setCurrentAge={setCurrentAge}
              chosenGrowthRate={chosenGrowthRate}
              setChosenGrowthRate={setChosenGrowthRate}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ExampleReturns 
              poorResults={poorResults}
              chosenResults={results}
              goodResults={goodResults}
              chosenRate={chosenGrowthRate}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <InflationBanner />
            <DrawdownChart 
              results={results} 
              poorResults={poorResults}
              goodResults={goodResults}
              currentAge={currentAge} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DrawdownCalculator;
