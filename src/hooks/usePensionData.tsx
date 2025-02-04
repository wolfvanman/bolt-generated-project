import { useState } from "react";
import { Pension } from "@/types/pension";

export const usePensionData = () => {
  const [pensions, setPensions] = useState<Pension[]>([
    {
      id: "1",
      companyName: "",
      amount: 0,
      ter: 0,
      amc: 0,
      adviceCharge: 0,
      platformCharge: 0,
      isPercentage: true,
      useDetailedCharges: false,
    },
  ]);

  const handlePensionChange = (id: string, updates: Partial<Pension>) => {
    setPensions((prev) =>
      prev.map((pension) =>
        pension.id === id ? { ...pension, ...updates } : pension
      )
    );
  };

  const addNewPension = () => {
    setPensions((prev) => [
      ...prev,
      {
        id: `pension-${Date.now()}`,
        companyName: "",
        amount: 0,
        ter: 0,
        amc: 0,
        adviceCharge: 0,
        platformCharge: 0,
        isPercentage: true,
        useDetailedCharges: false,
      },
    ]);
  };

  return {
    pensions,
    setPensions,
    handlePensionChange,
    addNewPension,
  };
};
