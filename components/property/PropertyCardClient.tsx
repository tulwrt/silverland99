"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Zap, Droplets, Wifi, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCurrency } from "@/hooks/use-currency";
import type { Database } from "@/types/database";

type Property = Database["public"]["Tables"]["properties"]["Row"] & {
  images?: Database["public"]["Tables"]["property_images"]["Row"][];
  category?: Database["public"]["Tables"]["categories"]["Row"] | null;
};

interface PropertyCardClientProps {
  property: Property;
  locale?: string;
  index?: number;
}

// Placeholder images for properties (using Unsplash)
const placeholderImages = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop", // Green field
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop", // Farm land
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=600&fit=crop", // Aerial view
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop", // Landscape
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop", // Mountain landscape
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop", // Nature
];

export function PropertyCardClient({ property, locale = "en", index = 0 }: PropertyCardClientProps) {
  const { formatPrice } = useCurrency();
  const primaryImage = property.images?.find((img) => img.is_primary) || property.images?.[0];

  // Use placeholder image if no real image exists
  const imageUrl = primaryImage?.url?.startsWith("/images/")
    ? placeholderImages[index % placeholderImages.length]
    : primaryImage?.url || placeholderImages[index % placeholderImages.length];

  // Format area
  const formatArea = (rai: number | null, ngan: number | null, sqwa: number | null) => {
    if (!rai) return null;
    let area = `${rai}`;
    if (ngan) area += `-${ngan}`;
    if (sqwa) area += `-${sqwa}`;
    return `${area} ${locale === "th" ? "ไร่" : "Rai"}`;
  };

  return (
    <Card className="overflow-hidden group card-hover-lift border-2 hover:border-primary/20 bg-card">
      <Link href={`/properties/${property.slug}`}>
        {/* Image */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          <Image
            src={imageUrl}
            alt={primaryImage?.alt_text || property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized={imageUrl.startsWith("https://")}
          />
          {property.featured && (
            <Badge className="absolute top-2 left-2" variant="default">
              {locale === "th" ? "แนะนำ" : "Featured"}
            </Badge>
          )}
          {property.category && (
            <Badge className="absolute top-2 right-2" variant="secondary">
              {property.category.name}
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>

          <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
            <MapPin className="h-3.5 w-3.5" />
            <span className="line-clamp-1">
              {property.district}, {property.province}
            </span>
          </div>

          {/* Infrastructure indicators */}
          <div className="flex items-center gap-3 mt-3 text-xs">
            {property.electricity_available && (
              <div className="flex items-center gap-1 text-yellow-600" title={`${property.electricity_capacity_mw || 0} MW`}>
                <Zap className="h-3.5 w-3.5" />
                <span>{property.electricity_capacity_mw || 0} MW</span>
              </div>
            )}
            {property.water_supply && (
              <div className="flex items-center gap-1 text-blue-600">
                <Droplets className="h-3.5 w-3.5" />
              </div>
            )}
            {property.internet_fiber && (
              <div className="flex items-center gap-1 text-green-600">
                <Wifi className="h-3.5 w-3.5" />
              </div>
            )}
          </div>

          {/* Price and Area */}
          <div className="flex justify-between items-end mt-4 pt-3 border-t">
            <div>
              <div className="text-lg font-bold text-primary">
                {property.price ? formatPrice(property.price) : (locale === "th" ? "ติดต่อสอบถาม" : "Contact for price")}
              </div>
              {property.price_per_rai && (
                <div className="text-xs text-muted-foreground">
                  {formatPrice(property.price_per_rai)}/{locale === "th" ? "ไร่" : "Rai"}
                </div>
              )}
            </div>
            {formatArea(property.area_rai, property.area_ngan, property.area_sqwa) && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Ruler className="h-3.5 w-3.5" />
                <span>{formatArea(property.area_rai, property.area_ngan, property.area_sqwa)}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
