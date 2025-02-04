import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Provider } from './types';
import { calculateAnnualFee, formatCurrency } from '@/utils/feeCalculations';
import { FeeBreakdown } from './FeeBreakdown';
import { providers } from './providerData';

interface FeeComparisonProps {
  potValue: number;
}

export const FeeComparison: React.FC<FeeComparisonProps> = ({ potValue }) => {
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);

  const toggleProvider = (providerName: string) => {
    setExpandedProvider(expandedProvider === providerName ? null : providerName);
  };

  // Sort providers by their calculated annual fee
  const sortedProviders = useMemo(() => {
    return [...providers].sort((a, b) => {
      const feeA = calculateAnnualFee(a, potValue);
      const feeB = calculateAnnualFee(b, potValue);
      return feeA - feeB;
    });
  }, [potValue]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 text-sm text-muted-foreground font-medium mb-4">
        <div>PROVIDER</div>
        <div>ANNUAL FEE</div>
        <div>FEE STRUCTURE</div>
      </div>

      {sortedProviders.map((provider) => (
        <div key={provider.name} className="border-b border-primary/10 pb-4">
          <div className="grid grid-cols-3 items-center">
            <div className="font-medium">{provider.name}</div>
            <div className="text-primary">
              {formatCurrency(calculateAnnualFee(provider, potValue))}
            </div>
            <div>
              <button
                onClick={() => toggleProvider(provider.name)}
                className="text-primary hover:text-primary-dark flex items-center gap-2"
              >
                View Fee Breakdown
                {expandedProvider === provider.name ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          {expandedProvider === provider.name && (
            <FeeBreakdown
              provider={provider}
              potValue={potValue}
            />
          )}
        </div>
      ))}
    </div>
  );
};
