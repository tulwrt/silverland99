import Link from "next/link";
import Image from "next/image";
import { MapPin, Zap, Droplets, Wifi, Ruler } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Database } from "@/types/database";

type Property = Database["public"]["Tables"]["properties"]["Row"] & {
  images?: Database["public"]["Tables"]["property_images"]["Row"][];
  category?: Database["public"]["Tables"]["categories"]["Row"] | null;
};

interface PropertyCardProps {
  property: Property;
  locale?: string;
}

export function PropertyCard({ property, locale = "en" }: PropertyCardProps) {
  const primaryImage = property.images?.find((img) => img.is_primary) || property.images?.[0];

  // Format price in Thai Baht
  const formatPrice = (price: number | null) => {
    if (!price) return locale === "th" ? "ติดต่อสอบถาม" : "Contact for price";
    return new Intl.NumberFormat(locale === "th" ? "th-TH" : "en-US", {
      style: "currency",
      currency: "THB",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Format area
  const formatArea = (rai: number | null, ngan: number | null, sqwa: number | null) => {
    if (!rai) return null;
    let area = `${rai}`;
    if (ngan) area += `-${ngan}`;
    if (sqwa) area += `-${sqwa}`;
    return `${area} ${locale === "th" ? "ไร่" : "Rai"}`;
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <Link href={`/properties/${property.slug}`}>
        {/* Image */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          {primaryImage ? (
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt_text || property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <MapPin className="h-12 w-12 text-muted-foreground/50" />
            </div>
          )}
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
                {formatPrice(property.price)}
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
