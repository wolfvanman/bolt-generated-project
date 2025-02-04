import { Provider } from '../types';

export type ProviderCategory = 
  | 'Traditional'
  | 'Bank'
  | 'RoboAdvisor'
  | 'Specialized'
  | 'Insurance'
  | 'WealthManager';

export interface CategoryProvider extends Provider {
  category: ProviderCategory;
}
