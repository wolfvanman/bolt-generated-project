import React from 'react';
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface FeeFinderResultsProps {
  potValue: number;
  currentFee: number;
  newFee: number;
  years: number;
  growthRate: number;
}

export const FeeFinderResults: React.FC<FeeFinderResultsProps> = ({
  potValue,
  currentFee,
  newFee,
  years,
  growthRate,
}) => {
  const calculateResults = () => {
    const data = [];
    let currentPotValue = potValue;
    let newPotValue = potValue;

    for (let year = 0; year <= years; year++) {
      data.push({
        year,
        'Current Fee': Math.round(currentPotValue),
        'New Fee': Math.round(newPotValue),
      });

      currentPotValue = currentPotValue * (1 + (growthRate - currentFee) / 100);
      newPotValue = newPotValue * (1 + (growthRate - newFee) / 100);
    }

    return data;
  };

  const results = calculateResults();
  const finalCurrentValue = results[results.length - 1]['Current Fee'];
  const finalNewValue = results[results.length - 1]['New Fee'];
  const difference = finalNewValue - finalCurrentValue;
  const percentageDifference = (difference / finalCurrentValue) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Final Value (Current Fee)</h3>
          <p className="text-2xl font-bold text-primary">{formatCurrency(finalCurrentValue)}</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Final Value (New Fee)</h3>
          <p className="text-2xl font-bold text-primary">{formatCurrency(finalNewValue)}</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Difference</h3>
          <p className="text-2xl font-bold text-primary">{formatCurrency(difference)}</p>
          <p className="text-sm text-muted-foreground">
            ({percentageDifference.toFixed(1)}% increase)
          </p>
        </Card>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={results}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="year" 
              label={{ 
                value: 'Years', 
                position: 'insideBottom', 
                offset: -5 
              }} 
            />
            <YAxis
              tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
              label={{
                value: 'Portfolio Value',
                angle: -90,
                position: 'insideLeft',
                offset: 10,
              }}
            />
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              labelFormatter={(label) => `Year ${label}`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Current Fee"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="New Fee"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
