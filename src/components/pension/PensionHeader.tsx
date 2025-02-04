import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface PensionHeaderProps {
  companyName: string;
  onChange: (value: string) => void;
}

const PensionHeader = ({ companyName, onChange }: PensionHeaderProps) => {
  return (
    <div>
      <Label htmlFor="company">Pension Provider</Label>
      <Input
        id="company"
        placeholder="Enter company name"
        value={companyName}
        onChange={(e) => onChange(e.target.value)}
        className="text-secondary bg-white"
      />
    </div>
  );
};

export default PensionHeader;
