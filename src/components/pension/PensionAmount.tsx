import { PoundSterling } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PensionAmountProps {
  amount: number;
  onChange: (value: number) => void;
}

const PensionAmount = ({ amount, onChange }: PensionAmountProps) => {
  return (
    <div>
      <Label htmlFor="amount">Pension Amount</Label>
      <div className="relative">
        <Input
          id="amount"
          type="number"
          placeholder="0"
          value={amount || ""}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="pl-8 text-secondary bg-white"
        />
        <PoundSterling className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export default PensionAmount;
