"use client";

import { useCurrency, type Currency } from "@/hooks/use-currency";
import { Button } from "@/components/ui/button";

const currencies: { code: Currency; label: string; symbol: string }[] = [
  { code: "THB", label: "THB", symbol: "฿" },
  { code: "USD", label: "USD", symbol: "$" },
  { code: "CNY", label: "CNY", symbol: "¥" },
];

export function CurrencySwitcher() {
  const { currency, setCurrency, isLoading } = useCurrency();

  return (
    <div className="flex items-center gap-1 rounded-md border p-1">
      {currencies.map((curr) => (
        <Button
          key={curr.code}
          variant={currency === curr.code ? "default" : "ghost"}
          size="sm"
          className="h-7 px-2 text-xs"
          onClick={() => setCurrency(curr.code)}
          disabled={isLoading}
        >
          {curr.label}
        </Button>
      ))}
    </div>
  );
}
