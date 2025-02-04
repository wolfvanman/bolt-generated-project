import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const InflationBanner = () => {
  return (
    <Alert className="mb-6">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Important Note About Inflation</AlertTitle>
      <AlertDescription className="mt-2">
        <p>The calculations shown do not account for inflation. In reality, inflation will affect both:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>The purchasing power of your withdrawals (meaning you might need to withdraw more over time to maintain the same lifestyle)</li>
          <li>The real value of your investment returns (as inflation reduces the actual value of your money over time)</li>
        </ul>
        <p className="mt-2">
          Historically, UK inflation has averaged around 2% per year. This means that £1,000 today might only buy you £820 worth of goods in 10 years' time.
        </p>
      </AlertDescription>
    </Alert>
  );
};
