import { Percent, Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TotalExpenseRatioProps {
  ter: number;
  onChange: (value: number) => void;
}

const TotalExpenseRatio = ({ ter, onChange }: TotalExpenseRatioProps) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Label>TER (Total Expense Ratio)</Label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 text-primary-accent cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                The Total Expense Ratio (TER) represents the total cost of managing
                and operating your pension fund, including all fees and charges.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="relative">
        <Input
          type="number"
          placeholder="0"
          value={ter || ""}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="pl-8 text-secondary bg-white"
          step="0.01"
        />
        <Percent className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export default TotalExpenseRatio;
