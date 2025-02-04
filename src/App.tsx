import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import PensionConsolidationCalculator from "@/pages/PensionConsolidationCalculator";
import DrawdownCalculator from "@/pages/DrawdownCalculator";
import CostOfDelayCalculator from "@/pages/CostOfDelayCalculator";
import InflationCalculator from "@/pages/InflationCalculator";
import FeeFinderCalculator from "@/pages/FeeFinderCalculator";
import { Button } from "./components/ui/button";
import { Home } from "lucide-react";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container flex h-16 items-center px-4">
            <Link to="/" className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
              </Button>
              <span className="font-bold">Pension Consolidation Calculator</span>
            </Link>
          </div>
        </header>
        <main className="container mx-auto py-6">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pension-consolidation-calculator" element={<PensionConsolidationCalculator />} />
            <Route path="/drawdown-calculator" element={<DrawdownCalculator />} />
            <Route path="/cost-of-delay-calculator" element={<CostOfDelayCalculator />} />
            <Route path="/inflation-calculator" element={<InflationCalculator />} />
            <Route path="/fee-finder-calculator" element={<FeeFinderCalculator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
