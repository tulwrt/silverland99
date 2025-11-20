// Property Types
export type PropertyStatus = 'draft' | 'published' | 'sold' | 'reserved'
export type PropertyType = 'land' | 'land_with_building' | 'industrial'
export type ZoningType = 'industrial' | 'commercial' | 'residential' | 'agricultural' | 'mixed'

export interface Property {
  id: string
  title: string
  slug: string
  description: string | null
  category_id: string | null
  property_type: PropertyType | null
  status: PropertyStatus

  // Pricing
  price: number | null
  price_per_rai: number | null
  price_negotiable: boolean

  // Area
  area_rai: number | null
  area_ngan: number | null
  area_sqwa: number | null
  area_sqm: number | null

  // Location
  address: string | null
  province: string | null
  district: string | null
  subdistrict: string | null
  postal_code: string | null
  latitude: number | null
  longitude: number | null

  // Zoning & Legal
  zoning: ZoningType | null
  title_deed_type: string | null

  // Infrastructure
  road_access: string | null
  road_width_meters: number | null
  electricity_available: boolean
  electricity_capacity_mw: number | null
  water_supply: boolean
  internet_fiber: boolean

  // Data Center specific
  nearby_substation: string | null
  distance_to_substation_km: number | null
  power_capacity_potential_mw: number | null
  cooling_water_source: string | null
  flood_free_years: number | null
  seismic_zone: string | null

  // Meta
  featured: boolean
  views: number
  created_at: string
  updated_at: string
  published_at: string | null

  // Relations
  category?: Category
  images?: PropertyImage[]
  documents?: PropertyDocument[]
  amenities?: Amenity[]
}

export interface PropertyImage {
  id: string
  property_id: string
  url: string
  alt_text: string | null
  is_primary: boolean
  sort_order: number
  created_at: string
}

export interface PropertyDocument {
  id: string
  property_id: string
  name: string
  document_type: string | null
  url: string
  is_public: boolean
  created_at: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  created_at: string
}

export interface Amenity {
  id: string
  name: string
  icon: string | null
  category: string | null
}

// User Types
export type UserRole = 'admin' | 'editor' | 'user'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  phone: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

// Inquiry Types
export type InquiryStatus = 'new' | 'contacted' | 'qualified' | 'closed'

export interface Inquiry {
  id: string
  property_id: string | null
  name: string
  email: string
  phone: string | null
  company: string | null
  message: string | null
  budget_range: string | null
  timeline: string | null
  status: InquiryStatus
  notes: string | null
  created_at: string
  updated_at: string

  // Relations
  property?: Property
}

// Blog Types
export type PostStatus = 'draft' | 'published'

export interface Post {
  id: string
  title: string
  slug: string
  content: string | null
  excerpt: string | null
  featured_image: string | null
  author_id: string | null
  status: PostStatus
  created_at: string
  updated_at: string
  published_at: string | null

  // Relations
  author?: User
}

// Filter Types
export interface PropertyFilters {
  search?: string
  category?: string
  province?: string
  district?: string
  min_price?: number
  max_price?: number
  min_area?: number
  max_area?: number
  zoning?: ZoningType
  electricity?: boolean
  water_supply?: boolean
  internet_fiber?: boolean
  flood_free?: boolean
  min_power_capacity?: number
  featured?: boolean
  status?: PropertyStatus
}

export interface PaginationParams {
  page?: number
  limit?: number
  sort_by?: string
  sort_order?: 'asc' | 'desc'
}

// API Response Types
export interface ApiResponse<T> {
  data: T
  error: string | null
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  total_pages: number
}
