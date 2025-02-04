import { traditionalProviders } from './providers/traditionalProviders';
import { bankProviders } from './providers/bankProviders';
import { roboAdvisors } from './providers/roboAdvisors';
import { specializedProviders } from './providers/specializedProviders';
import { insuranceProviders } from './providers/insuranceProviders';
import { wealthManagers } from './providers/wealthManagers';
import { Provider } from './types';

// Combine all providers into a single array
export const providers: Provider[] = [
  ...traditionalProviders,
  ...bankProviders,
  ...roboAdvisors,
  ...specializedProviders,
  ...insuranceProviders,
  ...wealthManagers
];
