import { supabase } from "@/integrations/supabase/client";
import { Pension } from "@/types/pension";
import { Json } from "@/integrations/supabase/types";
import { useToast } from "@/components/ui/use-toast";

export const useSavePensionData = () => {
  const { toast } = useToast();

  const saveData = async (
    pensions: Pension[],
    consolidatedRate: number,
    calculationId: string | null
  ) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const pensionsJson = pensions.map(pension => ({
        ...pension
      })) as unknown as Json;

      const savePayload = {
        pensions: pensionsJson,
        consolidated_rate: consolidatedRate,
        user_id: user.id,
      };

      let error;
      if (calculationId) {
        ({ error } = await supabase
          .from("pension_calculations")
          .update(savePayload)
          .eq("id", calculationId));
      } else {
        ({ error } = await supabase
          .from("pension_calculations")
          .insert([savePayload]));
      }

      if (error) throw error;
    } catch (error) {
      console.error("Error saving pension data:", error);
      toast({
        title: "Error saving data",
        description: "Your changes couldn't be saved. Please try again.",
        variant: "destructive",
      });
    }
  };

  return { saveData };
};
