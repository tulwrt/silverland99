import { z } from 'zod'

export const propertySchema = z.object({
  title: z.string().min(1, 'กรุณากรอกชื่อทรัพย์สิน'),
  description: z.string().optional(),
  category_id: z.string().optional(),
  property_type: z.enum(['land', 'land_with_building', 'industrial']).optional(),
  status: z.enum(['draft', 'published', 'sold', 'reserved']).default('draft'),

  // Pricing
  price: z.number().positive('ราคาต้องมากกว่า 0').optional(),
  price_per_rai: z.number().positive().optional(),
  price_negotiable: z.boolean().default(false),

  // Area
  area_rai: z.number().positive('พื้นที่ต้องมากกว่า 0').optional(),
  area_ngan: z.number().min(0).max(3).optional(),
  area_sqwa: z.number().min(0).max(99).optional(),

  // Location
  address: z.string().optional(),
  province: z.string().min(1, 'กรุณาเลือกจังหวัด'),
  district: z.string().optional(),
  subdistrict: z.string().optional(),
  postal_code: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),

  // Zoning
  zoning: z.enum(['industrial', 'commercial', 'residential', 'agricultural', 'mixed']).optional(),
  title_deed_type: z.string().optional(),

  // Infrastructure
  road_access: z.string().optional(),
  road_width_meters: z.number().positive().optional(),
  electricity_available: z.boolean().default(false),
  electricity_capacity_mw: z.number().positive().optional(),
  water_supply: z.boolean().default(false),
  internet_fiber: z.boolean().default(false),

  // Data Center specific
  nearby_substation: z.string().optional(),
  distance_to_substation_km: z.number().positive().optional(),
  power_capacity_potential_mw: z.number().positive().optional(),
  cooling_water_source: z.string().optional(),
  flood_free_years: z.number().int().positive().optional(),
  seismic_zone: z.string().optional(),

  // Meta
  featured: z.boolean().default(false),
})

export type PropertyFormData = z.infer<typeof propertySchema>
