// Database types generated from Supabase schema
// Update this file when schema changes

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          password_hash: string
          name: string
          role: string
          phone: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          name: string
          role?: string
          phone?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          name?: string
          role?: string
          phone?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          created_at?: string
        }
      }
      properties: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          category_id: string | null
          property_type: string | null
          status: string
          price: number | null
          price_per_rai: number | null
          price_negotiable: boolean
          area_rai: number | null
          area_ngan: number | null
          area_sqwa: number | null
          area_sqm: number | null
          address: string | null
          province: string | null
          district: string | null
          subdistrict: string | null
          postal_code: string | null
          latitude: number | null
          longitude: number | null
          zoning: string | null
          title_deed_type: string | null
          road_access: string | null
          road_width_meters: number | null
          electricity_available: boolean
          electricity_capacity_mw: number | null
          water_supply: boolean
          internet_fiber: boolean
          nearby_substation: string | null
          distance_to_substation_km: number | null
          power_capacity_potential_mw: number | null
          cooling_water_source: string | null
          flood_free_years: number | null
          seismic_zone: string | null
          featured: boolean
          views: number
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          category_id?: string | null
          property_type?: string | null
          status?: string
          price?: number | null
          price_per_rai?: number | null
          price_negotiable?: boolean
          area_rai?: number | null
          area_ngan?: number | null
          area_sqwa?: number | null
          area_sqm?: number | null
          address?: string | null
          province?: string | null
          district?: string | null
          subdistrict?: string | null
          postal_code?: string | null
          latitude?: number | null
          longitude?: number | null
          zoning?: string | null
          title_deed_type?: string | null
          road_access?: string | null
          road_width_meters?: number | null
          electricity_available?: boolean
          electricity_capacity_mw?: number | null
          water_supply?: boolean
          internet_fiber?: boolean
          nearby_substation?: string | null
          distance_to_substation_km?: number | null
          power_capacity_potential_mw?: number | null
          cooling_water_source?: string | null
          flood_free_years?: number | null
          seismic_zone?: string | null
          featured?: boolean
          views?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string | null
          category_id?: string | null
          property_type?: string | null
          status?: string
          price?: number | null
          price_per_rai?: number | null
          price_negotiable?: boolean
          area_rai?: number | null
          area_ngan?: number | null
          area_sqwa?: number | null
          area_sqm?: number | null
          address?: string | null
          province?: string | null
          district?: string | null
          subdistrict?: string | null
          postal_code?: string | null
          latitude?: number | null
          longitude?: number | null
          zoning?: string | null
          title_deed_type?: string | null
          road_access?: string | null
          road_width_meters?: number | null
          electricity_available?: boolean
          electricity_capacity_mw?: number | null
          water_supply?: boolean
          internet_fiber?: boolean
          nearby_substation?: string | null
          distance_to_substation_km?: number | null
          power_capacity_potential_mw?: number | null
          cooling_water_source?: string | null
          flood_free_years?: number | null
          seismic_zone?: string | null
          featured?: boolean
          views?: number
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
      property_images: {
        Row: {
          id: string
          property_id: string
          url: string
          alt_text: string | null
          is_primary: boolean
          sort_order: number
          created_at: string
        }
        Insert: {
          id?: string
          property_id: string
          url: string
          alt_text?: string | null
          is_primary?: boolean
          sort_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          property_id?: string
          url?: string
          alt_text?: string | null
          is_primary?: boolean
          sort_order?: number
          created_at?: string
        }
      }
      inquiries: {
        Row: {
          id: string
          property_id: string | null
          name: string
          email: string
          phone: string | null
          company: string | null
          message: string | null
          budget_range: string | null
          timeline: string | null
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          property_id?: string | null
          name: string
          email: string
          phone?: string | null
          company?: string | null
          message?: string | null
          budget_range?: string | null
          timeline?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          property_id?: string | null
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          message?: string | null
          budget_range?: string | null
          timeline?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          excerpt: string | null
          featured_image: string | null
          author_id: string | null
          status: string
          created_at: string
          updated_at: string
          published_at: string | null
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          status?: string
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          excerpt?: string | null
          featured_image?: string | null
          author_id?: string | null
          status?: string
          created_at?: string
          updated_at?: string
          published_at?: string | null
        }
      }
    }
  }
}
