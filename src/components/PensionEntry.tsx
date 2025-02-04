import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Pension } from "@/types/pension";

interface PensionEntryProps {
  pension: Pension;
  onChange: (updates: Partial<Pension>) => void;
  isLatest: boolean;
}

const PensionEntry = ({ pension, onChange, isLatest }: PensionEntryProps) => {
  const handleInputChange = (field: keyof Pension, value: string | number | boolean) => {
    if (typeof value === "string" && field !== "companyName") {
      const numValue = parseFloat(value) || 0;
      onChange({ [field]: numValue });
    } else {
      onChange({ [field]: value });
    }
  };

  return (
    <AccordionItem value={pension.id} className="border rounded-lg bg-secondary/50">
      <AccordionTrigger className="px-4">
        <div className="flex justify-between items-center w-full">
          <span className="text-white">
            {pension.companyName || "New Pension"}
          </span>
          <span className="text-primary-muted">
            £{pension.amount.toLocaleString()}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-4 space-y-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor={`company-${pension.id}`}>Company Name</Label>
            <Input
              id={`company-${pension.id}`}
              value={pension.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Enter company name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`amount-${pension.id}`}>Pension Amount (£)</Label>
            <Input
              id={`amount-${pension.id}`}
              type="number"
              value={pension.amount || ""}
              onChange={(e) => handleInputChange("amount", e.target.value)}
              placeholder="Enter pension amount"
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor={`detailed-${pension.id}`}>Use Detailed Charges</Label>
            <Switch
              id={`detailed-${pension.id}`}
              checked={pension.useDetailedCharges}
              onCheckedChange={(checked) =>
                handleInputChange("useDetailedCharges", checked)
              }
            />
          </div>
          {pension.useDetailedCharges ? (
            <>
              <div className="grid gap-2">
                <Label htmlFor={`amc-${pension.id}`}>Annual Management Charge (%)</Label>
                <Input
                  id={`amc-${pension.id}`}
                  type="number"
                  value={pension.amc || ""}
                  onChange={(e) => handleInputChange("amc", e.target.value)}
                  placeholder="Enter AMC"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`platform-${pension.id}`}>Platform Charge (%)</Label>
                <Input
                  id={`platform-${pension.id}`}
                  type="number"
                  value={pension.platformCharge || ""}
                  onChange={(e) => handleInputChange("platformCharge", e.target.value)}
                  placeholder="Enter platform charge"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor={`advice-${pension.id}`}>Advice Charge (%)</Label>
                <Input
                  id={`advice-${pension.id}`}
                  type="number"
                  value={pension.adviceCharge || ""}
                  onChange={(e) => handleInputChange("adviceCharge", e.target.value)}
                  placeholder="Enter advice charge"
                />
              </div>
            </>
          ) : (
            <div className="grid gap-2">
              <Label htmlFor={`ter-${pension.id}`}>Total Expense Ratio (%)</Label>
              <Input
                id={`ter-${pension.id}`}
                type="number"
                value={pension.ter || ""}
                onChange={(e) => handleInputChange("ter", e.target.value)}
                placeholder="Enter TER"
              />
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PensionEntry;
