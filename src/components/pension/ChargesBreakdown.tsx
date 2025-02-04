import { Percent, Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChargesBreakdownProps {
  amc: number;
  adviceCharge: number;
  platformCharge: number;
  onChange: (updates: { [key: string]: number }) => void;
}

const ChargesBreakdown = ({
  amc,
  adviceCharge,
  platformCharge,
  onChange,
}: ChargesBreakdownProps) => {
  const renderTooltip = (trigger: React.ReactNode, content: string) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Label>Detailed Charges</Label>
        {renderTooltip(
          <Info className="h-4 w-4 text-primary-accent cursor-help" />,
          "Break down your total charges into individual components"
        )}
      </div>

      <div className="grid gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Label htmlFor="amc">AMC</Label>
            {renderTooltip(
              <Info className="h-4 w-4 text-primary-accent cursor-help" />,
              "Annual Management Charge - The base fee charged by the fund manager for managing your investments"
            )}
          </div>
          <div className="relative">
            <Input
              id="amc"
              type="number"
              placeholder="0"
              value={amc || ""}
              onChange={(e) => {
                const value = parseFloat(e.target.value) || 0;
                onChange({ amc: value });
              }}
              className="pl-8 bg-white"
              step="0.01"
            />
            <Percent className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Label htmlFor="advice">Advice Charge</Label>
            {renderTooltip(
              <Info className="h-4 w-4 text-primary-accent cursor-help" />,
              "The fee charged for financial advice services related to your pension"
            )}
          </div>
          <div className="relative">
            <Input
              id="advice"
              type="number"
              placeholder="0"
              value={adviceCharge || ""}
              onChange={(e) => {
                const value = parseFloat(e.target.value) || 0;
                onChange({ adviceCharge: value });
              }}
              className="pl-8 bg-white"
              step="0.01"
            />
            <Percent className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Label htmlFor="platform">Platform Charge</Label>
            {renderTooltip(
              <Info className="h-4 w-4 text-primary-accent cursor-help" />,
              "The fee charged by the platform for administering your pension"
            )}
          </div>
          <div className="relative">
            <Input
              id="platform"
              type="number"
              placeholder="0"
              value={platformCharge || ""}
              onChange={(e) => {
                const value = parseFloat(e.target.value) || 0;
                onChange({ platformCharge: value });
              }}
              className="pl-8 bg-white"
              step="0.01"
            />
            <Percent className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChargesBreakdown;
