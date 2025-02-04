import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import PensionEntry from "@/components/PensionEntry";
import { Pension } from "@/types/pension";

interface PensionListProps {
  pensions: Pension[];
  onPensionChange: (id: string, updates: Partial<Pension>) => void;
  onAddPension: () => void;
}

const PensionList = ({ pensions, onPensionChange, onAddPension }: PensionListProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Your Pensions</h2>
        <Button
          onClick={onAddPension}
          className="gap-2 bg-primary text-secondary hover:bg-primary-dark"
        >
          <Plus className="h-4 w-4" /> Add Pension
        </Button>
      </div>
      <div className="bg-muted rounded-lg p-4 border border-primary/20">
        <Accordion type="single" collapsible defaultValue="1" className="space-y-4">
          {pensions.map((pension, index) => (
            <PensionEntry
              key={pension.id}
              pension={pension}
              onChange={(updates) => onPensionChange(pension.id, updates)}
              isLatest={index === pensions.length - 1}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default PensionList;
