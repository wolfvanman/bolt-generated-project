import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { DrawdownResult, formatCurrency } from "@/utils/drawdownCalculations";

interface DrawdownChartProps {
  results: DrawdownResult[];
  poorResults: DrawdownResult[];
  goodResults: DrawdownResult[];
  currentAge: number;
}

export const DrawdownChart = ({ results, poorResults, goodResults, currentAge }: DrawdownChartProps) => {
  const chartConfig = {
    balance: {
      label: "Chosen (5%)",
      theme: {
        light: "#414B56",
        dark: "#414B56",
      },
    },
    poor: {
      label: "Poor (-1%)",
      theme: {
        light: "#F15A29",
        dark: "#F15A29",
      },
    },
    good: {
      label: "Good (8%)",
      theme: {
        light: "#C8A87D",
        dark: "#C8A87D",
      },
    },
  };

  const formattedData = results.map((result, index) => ({
    ...result,
    poorBalance: poorResults[index]?.endingBalance,
    goodBalance: goodResults[index]?.endingBalance,
    age: currentAge + index,
  }));

  return (
    <div className="w-full h-[600px] relative mb-4">
      <ChartContainer config={chartConfig}>
        <LineChart 
          data={formattedData}
          margin={{ top: 20, right: 40, left: 20, bottom: 40 }}
          width={1000}
          height={500}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="age" 
            label={{ value: 'Age', position: 'bottom', offset: 10 }}
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            tickFormatter={(value) => formatCurrency(value)}
            tick={{ fontSize: 12 }}
            width={90}
          />
          <ChartTooltip 
            formatter={(value: number) => formatCurrency(value)}
          />
          <Legend 
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ paddingTop: '10px' }}
          />
          <Line 
            type="monotone" 
            dataKey="poorBalance"
            name="Poor (-1%)"
            stroke="#F15A29"
            strokeWidth={2}
            dot={{ r: 1 }}
          />
          <Line 
            type="monotone" 
            dataKey="endingBalance" 
            name="Chosen (5%)"
            stroke="#414B56"
            strokeWidth={2}
            dot={{ r: 1 }}
          />
          <Line 
            type="monotone" 
            dataKey="goodBalance"
            name="Good (8%)"
            stroke="#C8A87D"
            strokeWidth={2}
            dot={{ r: 1 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
