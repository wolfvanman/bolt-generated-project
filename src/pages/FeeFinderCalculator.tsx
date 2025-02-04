import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { FeeComparison } from "@/components/feeFinder/FeeComparison";

const FeeFinderCalculator = () => {
  const navigate = useNavigate();
  const [potValue, setPotValue] = useState<string>('100000');

  return (
    <div className="min-h-screen bg-secondary">
      <div className="bg-muted p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-white">Pension Drawdown</span>
            <span className="text-primary"> Calculator</span>
          </h1>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:text-primary"
          >
            <Home className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto p-4 space-y-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Compare annual fees across different pension providers
          </p>
        </div>

        <Card className="p-6">
          <div className="flex gap-4 items-end mb-8">
            <div className="flex-1">
              <input
                type="number"
                value={potValue}
                onChange={(e) => setPotValue(e.target.value)}
                className="w-full p-3 rounded-lg bg-muted border border-primary/20 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button className="bg-primary hover:bg-primary-dark text-secondary">
              Calculate Fees
            </Button>
          </div>

          <FeeComparison potValue={parseFloat(potValue)} />
        </Card>
      </div>
    </div>
  );
};

export default FeeFinderCalculator;
