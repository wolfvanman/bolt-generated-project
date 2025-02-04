import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Pension } from "@/types/pension";
import { Json } from "@/integrations/supabase/types";
import { useToast } from "@/components/ui/use-toast";

export const useLoadPensionData = () => {
  const { toast } = useToast();
  const [calculationId, setCalculationId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadSavedData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;

      const { data, error } = await supabase
        .from("pension_calculations")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error("Error loading pension data:", error);
        return null;
      }

      if (data) {
        setCalculationId(data.id);
        return {
          pensions: (data.pensions as Json[]).map((pension: any) => ({
            id: pension.id as string,
            companyName: pension.companyName as string,
            amount: pension.amount as number,
            ter: pension.ter as number,
            amc: pension.amc as number,
            adviceCharge: pension.adviceCharge as number,
            platformCharge: pension.platformCharge as number,
            isPercentage: pension.isPercentage as boolean,
            useDetailedCharges: pension.useDetailedCharges as boolean,
          })),
          consolidatedRate: data.consolidated_rate,
        };
      }
      return null;
    } catch (error) {
      console.error("Error loading pension data:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loadSavedData,
    calculationId,
    isLoading,
  };
};
