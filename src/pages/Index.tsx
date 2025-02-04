import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { Calculator, TrendingDown, Clock, Percent, PoundSterling, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useActivityLogger } from "@/hooks/useActivityLogger";

const Index = () => {
  const navigate = useNavigate();
  const { logActivity } = useActivityLogger();
  
  const handleSignOut = async () => {
    await logActivity({
      activityType: 'logout',
      description: 'User signed out',
    });
    await supabase.auth.signOut();
  };

  const openCalendly = () => {
    window.open('https://calendly.com/philhandley/30min', '_blank');
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Financial Calculators</h1>
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>

        <Button
          variant="secondary"
          className="w-full mb-8 h-16 flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/80"
          onClick={openCalendly}
        >
          <Calendar className="h-6 w-6" />
          <span>Book a Meeting</span>
        </Button>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Button
            variant="outline"
            className="h-32 flex flex-col gap-2"
            onClick={() => navigate("/pension-consolidation-calculator")}
          >
            <Calculator className="h-6 w-6" />
            <span>Pension Consolidation Calculator</span>
          </Button>

          <Button
            variant="outline"
            className="h-32 flex flex-col gap-2"
            onClick={() => navigate("/drawdown-calculator")}
          >
            <TrendingDown className="h-6 w-6" />
            <span>Drawdown Calculator</span>
          </Button>

          <Button
            variant="outline"
            className="h-32 flex flex-col gap-2"
            onClick={() => navigate("/cost-of-delay-calculator")}
          >
            <Clock className="h-6 w-6" />
            <span>Cost of Delay Calculator</span>
          </Button>

          <Button
            variant="outline"
            className="h-32 flex flex-col gap-2"
            onClick={() => navigate("/inflation-calculator")}
          >
            <Percent className="h-6 w-6" />
            <span>Inflation Calculator</span>
          </Button>

          <Button
            variant="outline"
            className="h-32 flex flex-col gap-2"
            onClick={() => navigate("/fee-finder-calculator")}
          >
            <PoundSterling className="h-6 w-6" />
            <span>Fee Finder Calculator</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
