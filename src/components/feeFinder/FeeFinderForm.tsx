import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FeeFinderFormProps {
  potValue: number;
  setPotValue: (value: number) => void;
  currentFee: number;
  setCurrentFee: (value: number) => void;
  newFee: number;
  setNewFee: (value: number) => void;
  years: number;
  setYears: (value: number) => void;
  growthRate: number;
  setGrowthRate: (value: number) => void;
}

export const FeeFinderForm: React.FC<FeeFinderFormProps> = ({
  potValue,
  setPotValue,
  currentFee,
  setCurrentFee,
  newFee,
  setNewFee,
  years,
  setYears,
  growthRate,
  setGrowthRate,
}) => {
  const handleInputChange = (setter: (value: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setter(value);
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="potValue">Current Pension Value (£)</Label>
        <Input
          id="potValue"
          type="number"
          value={potValue}
          onChange={handleInputChange(setPotValue)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="currentFee">Current Annual Fee (%)</Label>
        <Input
          id="currentFee"
          type="number"
          step="0.01"
          value={currentFee}
          onChange={handleInputChange(setCurrentFee)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="newFee">New Annual Fee (%)</Label>
        <Input
          id="newFee"
          type="number"
          step="0.01"
          value={newFee}
          onChange={handleInputChange(setNewFee)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="years">Investment Period (Years)</Label>
        <Input
          id="years"
          type="number"
          value={years}
          onChange={handleInputChange(setYears)}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="growthRate">Expected Annual Growth Rate (%)</Label>
        <Input
          id="growthRate"
          type="number"
          step="0.1"
          value={growthRate}
          onChange={handleInputChange(setGrowthRate)}
          className="mt-1"
        />
      </div>
    </div>
  );
};
