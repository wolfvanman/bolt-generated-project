import { supabase } from "@/integrations/supabase/client";
import { Json } from "@/integrations/supabase/types";

type ActivityType = 'pension_update' | 'drawdown_update' | 'inflation_update' | 'fee_finder_update' | 'login' | 'logout';

interface LogActivityParams {
  activityType: ActivityType;
  description: string;
  metadata?: Record<string, any>;
}

export const useActivityLogger = () => {
  const logActivity = async ({ activityType, description, metadata = {} }: LogActivityParams) => {
    try {
      // Get the current user's ID
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.error('No authenticated user found');
        return;
      }

      const { error } = await supabase
        .from('user_activities')
        .insert([
          {
            user_id: user.id,
            activity_type: activityType,
            description,
            metadata: metadata as Json
          }
        ]);

      if (error) {
        console.error('Error logging activity:', error);
      }
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  };

  return { logActivity };
};
