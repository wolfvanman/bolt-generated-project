import { Info } from "lucide-react";

export const InfoBanner = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start gap-3">
      <Info className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
      <p className="text-sm text-blue-700">
        If you're 55 or older, drawdown lets you access your pension flexibly. Take up to 25% tax-free and keep the rest invested. Use our calculator to plan your retirement income.
      </p>
    </div>
  );
};
