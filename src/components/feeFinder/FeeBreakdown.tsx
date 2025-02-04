import React from 'react';
import { Provider } from './types';
import { formatCurrency } from '@/utils/feeCalculations';

interface FeeBreakdownProps {
  provider: Provider;
  potValue: number;
}

export const FeeBreakdown: React.FC<FeeBreakdownProps> = ({
  provider,
  potValue,
}) => {
  return (
    <div className="mt-4 pl-4 space-y-4">
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="font-medium text-primary-dark">Fee Structure:</div>
        {provider.breakdown?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      {(provider.adminFee || provider.setupFee || provider.monthlyFee) && (
        <div className="space-y-2">
          <div className="font-medium text-primary-dark">Additional Fees:</div>
          {provider.adminFee && (
            <div className="text-sm text-muted-foreground">
              Admin fee: {formatCurrency(provider.adminFee)}
            </div>
          )}
          {provider.setupFee && (
            <div className="text-sm text-muted-foreground">
              Setup fee: {formatCurrency(provider.setupFee)}
            </div>
          )}
          {provider.monthlyFee && (
            <div className="text-sm text-muted-foreground">
              Monthly fee: {formatCurrency(provider.monthlyFee)} 
              (Annual: {formatCurrency(provider.monthlyFee * 12)})
            </div>
          )}
        </div>
      )}
    </div>
  );
};
