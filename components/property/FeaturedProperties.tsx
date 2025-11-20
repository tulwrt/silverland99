"use client";

import { PropertyCardClient } from "./PropertyCardClient";
import { CurrencySwitcher } from "@/components/ui/currency-switcher";
import { Card, CardContent } from "@/components/ui/card";
import type { Database } from "@/types/database";

type Property = Database["public"]["Tables"]["properties"]["Row"] & {
  images?: Database["public"]["Tables"]["property_images"]["Row"][];
  category?: Database["public"]["Tables"]["categories"]["Row"] | null;
};

interface FeaturedPropertiesProps {
  properties: Property[] | null;
  locale: string;
  loadingText: string;
}

export function FeaturedProperties({ properties, locale, loadingText }: FeaturedPropertiesProps) {
  return (
    <>
      {/* Currency Switcher */}
      <div className="flex justify-end mb-4">
        <CurrencySwitcher />
      </div>

      {/* Property cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties && properties.length > 0 ? (
          properties.map((property, index) => (
            <PropertyCardClient
              key={property.id}
              property={property}
              locale={locale}
              index={index}
            />
          ))
        ) : (
          // Placeholder when no data
          [1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video bg-muted animate-pulse" />
              <CardContent className="p-4">
                <div className="h-4 bg-muted rounded animate-pulse mb-2" />
                <div className="h-3 bg-muted rounded animate-pulse w-2/3" />
                <div className="mt-4 flex justify-between items-center">
                  <div className="h-5 bg-muted rounded animate-pulse w-1/3" />
                  <div className="h-3 bg-muted rounded animate-pulse w-1/4" />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
      {(!properties || properties.length === 0) && (
        <p className="text-center text-muted-foreground mt-8">
          {loadingText}
        </p>
      )}
    </>
  );
}
