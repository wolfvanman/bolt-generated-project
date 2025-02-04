import { Card } from "@/components/ui/card";
import PensionList from "@/components/pension/PensionList";
import PensionSummary from "@/components/pension/PensionSummary";
import ConsolidationSummary from "@/components/pension/ConsolidationSummary";
import { usePensionCalculator } from "@/hooks/usePensionCalculator";
import {
  calculateTotalPensionValue,
  calculateTotalCharges,
  calculateAverageChargeRate,
  calculateConsolidatedCharges,
  calculateAnnualSavings,
} from "@/utils/pensionCalculations";

const PensionConsolidationCalculator = () => {
  const {
    pensions,
    consolidatedRate,
    setConsolidatedRate,
    handlePensionChange,
    addNewPension,
    clearData,
    isLoading,
  } = usePensionCalculator();

  const totalPensionValue = calculateTotalPensionValue(pensions);
  const totalCharges = calculateTotalCharges(pensions);
  const averageChargeRate = calculateAverageChargeRate(pensions);
  const consolidatedCharges = calculateConsolidatedCharges(totalPensionValue, consolidatedRate);
  const annualSavings = calculateAnnualSavings(totalCharges, consolidatedCharges);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <PensionList
            pensions={pensions}
            onPensionChange={handlePensionChange}
            onAddPension={addNewPension}
          />
        </div>
        <div className="lg:col-span-4 space-y-6">
          <PensionSummary
            totalPensionValue={totalPensionValue}
            totalCharges={totalCharges}
            averageChargeRate={averageChargeRate}
          />
          <ConsolidationSummary
            consolidatedRate={consolidatedRate}
            setConsolidatedRate={setConsolidatedRate}
            consolidatedCharges={consolidatedCharges}
            annualSavings={annualSavings}
            onClear={clearData}
          />
        </div>
      </div>
    </div>
  );
};

export default PensionConsolidationCalculator;
