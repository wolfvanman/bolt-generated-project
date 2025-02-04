import { supabase } from "@/integrations/supabase/client";

export const getAlphaVantageKey = async () => {
  const { data: { "Alpha Vantage": Alpha_Vantage }, error } = await supabase
    .functions.invoke('get-secret', {
      body: { name: 'Alpha Vantage' }
    });

  if (error) throw error;
  return Alpha_Vantage;
};

export const fetchCompanyOverview = async (symbol: string, apiKey: string) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
  );
  return response.json();
};

export const searchSymbols = async (searchTerm: string, apiKey: string) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${apiKey}`
  );
  return response.json();
};

export interface DailyTimeSeriesData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface TimeSeriesResponse {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Output Size": string;
    "5. Time Zone": string;
  };
  "Time Series (Daily)": {
    [date: string]: DailyTimeSeriesData;
  };
}

export const fetchDailyTimeSeries = async (
  symbol: string, 
  apiKey: string, 
  outputSize: 'compact' | 'full' = 'compact'
): Promise<TimeSeriesResponse> => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=${outputSize}&apikey=${apiKey}`
  );
  
  if (!response.ok) {
    throw new Error(`Failed to fetch time series data: ${response.statusText}`);
  }

  const data = await response.json();
  
  if (data['Error Message']) {
    throw new Error(data['Error Message']);
  }
  
  return data;
};
