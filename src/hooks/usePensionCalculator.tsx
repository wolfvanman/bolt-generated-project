import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useLoadPensionData } from "./useLoadPensionData";
import { useSavePensionData } from "./useSavePensionData";
import { usePensionData } from "./usePensionData";

export const usePensionCalculator = () => {
  const { toast } = useToast();
  const [consolidatedRate, setConsolidatedRate] = useState(0.6);
  const { loadSavedData, calculationId, isLoading } = useLoadPensionData();
  const { saveData } = useSavePensionData();
  const { pensions, setPensions, handlePensionChange, addNewPension } = usePensionData();

  useEffect(() => {
    const initializeData = async () => {
      const data = await loadSavedData();
      if (data) {
        setPensions(data.pensions);
        setConsolidatedRate(data.consolidatedRate);
      }
    };
    initializeData();
  }, []);

  useEffect(() => {
    if (pensions.some((pension) => pension.amount > 0 || pension.companyName)) {
      saveData(pensions, consolidatedRate, calculationId);
    }
  }, [pensions, consolidatedRate]);

  const clearData = async () => {
    try {
      if (calculationId) {
        const { error } = await supabase
          .from("pension_calculations")
          .delete()
          .eq("id", calculationId);
        
        if (error) throw error;
      }

      setPensions([{
        id: "1",
        companyName: "",
        amount: 0,
        ter: 0,
        amc: 0,
        adviceCharge: 0,
        platformCharge: 0,
        isPercentage: true,
        useDetailedCharges: false,
      }]);
      setConsolidatedRate(0.6);

      toast({
        title: "Data cleared",
        description: "Your pension calculator has been reset.",
      });
    } catch (error) {
      console.error("Error clearing data:", error);
      toast({
        title: "Error clearing data",
        description: "Your data couldn't be cleared. Please try again.",
        variant: "destructive",
      });
    }
  };

  return {
    pensions,
    consolidatedRate,
    setConsolidatedRate,
    handlePensionChange,
    addNewPension,
    clearData,
    isLoading,
  };
};
