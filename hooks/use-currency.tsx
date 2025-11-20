"use client";

import { useState, useEffect, createContext, useContext } from "react";

export type Currency = "THB" | "USD" | "CNY";

interface ExchangeRates {
  THB: number;
  USD: number;
  CNY: number;
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  rates: ExchangeRates;
  isLoading: boolean;
  convertPrice: (priceInTHB: number) => number;
  formatPrice: (priceInTHB: number) => string;
}

const defaultRates: ExchangeRates = {
  THB: 1,
  USD: 0.028, // Default fallback rate
  CNY: 0.20,  // Default fallback rate
};

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("THB");
  const [rates, setRates] = useState<ExchangeRates>(defaultRates);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch real-time exchange rates
    const fetchRates = async () => {
      try {
        // Using exchangerate-api.com free tier
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/THB"
        );
        if (response.ok) {
          const data = await response.json();
          setRates({
            THB: 1,
            USD: data.rates.USD || defaultRates.USD,
            CNY: data.rates.CNY || defaultRates.CNY,
          });
        }
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
        // Keep default rates on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchRates();
    // Refresh rates every hour
    const interval = setInterval(fetchRates, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const convertPrice = (priceInTHB: number): number => {
    return priceInTHB * rates[currency];
  };

  const formatPrice = (priceInTHB: number): string => {
    const converted = convertPrice(priceInTHB);

    const formatOptions: Intl.NumberFormatOptions = {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };

    switch (currency) {
      case "USD":
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          ...formatOptions,
        }).format(converted);
      case "CNY":
        return new Intl.NumberFormat("zh-CN", {
          style: "currency",
          currency: "CNY",
          ...formatOptions,
        }).format(converted);
      default:
        return new Intl.NumberFormat("th-TH", {
          style: "currency",
          currency: "THB",
          ...formatOptions,
        }).format(converted);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        rates,
        isLoading,
        convertPrice,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
