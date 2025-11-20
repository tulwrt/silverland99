-- Silverland99 Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user', -- admin, editor, user
    phone VARCHAR(20),
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CATEGORIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories
INSERT INTO categories (name, slug, description) VALUES
('ที่ดินสำหรับ Data Center', 'data-center', 'ที่ดินแปลงใหญ่เหมาะสำหรับสร้าง Data Center'),
('ที่ดินเปล่า', 'land', 'ที่ดินเปล่าทั่วไป'),
('ที่ดินอุตสาหกรรม', 'industrial', 'ที่ดินในเขตอุตสาหกรรม');

-- ============================================
-- PROPERTIES TABLE (Main table)
-- ============================================
CREATE TABLE IF NOT EXISTS properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    description TEXT,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,

    -- Property classification
    property_type VARCHAR(100), -- land, land_with_building, industrial
    status VARCHAR(50) DEFAULT 'draft', -- draft, published, sold, reserved

    -- Pricing
    price DECIMAL(15, 2),
    price_per_rai DECIMAL(15, 2),
    price_negotiable BOOLEAN DEFAULT false,

    -- Area measurements
    area_rai DECIMAL(10, 2),
    area_ngan DECIMAL(10, 2),
    area_sqwa DECIMAL(10, 2),
    area_sqm DECIMAL(15, 2),

    -- Location
    address TEXT,
    province VARCHAR(100),
    district VARCHAR(100),
    subdistrict VARCHAR(100),
    postal_code VARCHAR(10),
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),

    -- Zoning & Legal
    zoning VARCHAR(100), -- industrial, commercial, residential, agricultural, mixed
    title_deed_type VARCHAR(100), -- chanote, nor_sor_3_gor, nor_sor_3, sor_por_kor

    -- Infrastructure
    road_access TEXT,
    road_width_meters DECIMAL(5, 2),
    electricity_available BOOLEAN DEFAULT false,
    electricity_capacity_mw DECIMAL(10, 2),
    water_supply BOOLEAN DEFAULT false,
    internet_fiber BOOLEAN DEFAULT false,

    -- Data Center specific fields
    nearby_substation VARCHAR(255),
    distance_to_substation_km DECIMAL(10, 2),
    power_capacity_potential_mw DECIMAL(10, 2),
    cooling_water_source TEXT,
    flood_free_years INTEGER,
    seismic_zone VARCHAR(50),

    -- Meta
    featured BOOLEAN DEFAULT false,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- PROPERTY IMAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS property_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    alt_text VARCHAR(255),
    is_primary BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- PROPERTY DOCUMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS property_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    document_type VARCHAR(100), -- title_deed, map, survey, environmental
    url TEXT NOT NULL,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- AMENITIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS amenities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    icon VARCHAR(100),
    category VARCHAR(100) -- infrastructure, utility, transport
);

-- Insert default amenities
INSERT INTO amenities (name, icon, category) VALUES
('ไฟฟ้า 3 เฟส', 'Zap', 'infrastructure'),
('น้ำประปา', 'Droplets', 'infrastructure'),
('Internet Fiber', 'Wifi', 'infrastructure'),
('ถนนลาดยาง', 'Route', 'transport'),
('ใกล้ทางด่วน', 'Car', 'transport'),
('ใกล้สนามบิน', 'Plane', 'transport'),
('ใกล้ท่าเรือ', 'Ship', 'transport'),
('ใกล้สถานีไฟฟ้า', 'Building', 'infrastructure');

-- ============================================
-- PROPERTY-AMENITIES JUNCTION TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS property_amenities (
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    amenity_id UUID REFERENCES amenities(id) ON DELETE CASCADE,
    PRIMARY KEY (property_id, amenity_id)
);

-- ============================================
-- INQUIRIES TABLE (Leads/Contact form)
-- ============================================
CREATE TABLE IF NOT EXISTS inquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    message TEXT,
    budget_range VARCHAR(100),
    timeline VARCHAR(100),
    status VARCHAR(50) DEFAULT 'new', -- new, contacted, qualified, closed
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- BLOG POSTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(500) UNIQUE NOT NULL,
    content TEXT,
    excerpt TEXT,
    featured_image TEXT,
    author_id UUID REFERENCES users(id) ON DELETE SET NULL,
    status VARCHAR(50) DEFAULT 'draft', -- draft, published
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE
);

-- ============================================
-- SITE SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS site_settings (
    key VARCHAR(255) PRIMARY KEY,
    value JSONB,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default settings
INSERT INTO site_settings (key, value) VALUES
('site_name', '"Silverland99"'),
('site_description', '"แพลตฟอร์มขายอสังหาริมทรัพย์เน้นแปลงขนาดใหญ่สำหรับ Data Center"'),
('contact_email', '"contact@silverland99.com"'),
('contact_phone', '"02-xxx-xxxx"');

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_properties_status ON properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_province ON properties(province);
CREATE INDEX IF NOT EXISTS idx_properties_price ON properties(price);
CREATE INDEX IF NOT EXISTS idx_properties_area ON properties(area_rai);
CREATE INDEX IF NOT EXISTS idx_properties_featured ON properties(featured);
CREATE INDEX IF NOT EXISTS idx_properties_category ON properties(category_id);
CREATE INDEX IF NOT EXISTS idx_properties_created ON properties(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_properties_slug ON properties(slug);

CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published_at DESC);

CREATE INDEX IF NOT EXISTS idx_property_images_property ON property_images(property_id);
CREATE INDEX IF NOT EXISTS idx_property_images_primary ON property_images(property_id, is_primary);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE property_amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public can view published properties" ON properties
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view property images" ON property_images
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM properties
            WHERE properties.id = property_images.property_id
            AND properties.status = 'published'
        )
    );

CREATE POLICY "Public can view categories" ON categories
    FOR SELECT USING (true);

CREATE POLICY "Public can view amenities" ON amenities
    FOR SELECT USING (true);

CREATE POLICY "Public can view property amenities" ON property_amenities
    FOR SELECT USING (true);

CREATE POLICY "Public can view published posts" ON posts
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view site settings" ON site_settings
    FOR SELECT USING (true);

-- Public can insert inquiries
CREATE POLICY "Public can create inquiries" ON inquiries
    FOR INSERT WITH CHECK (true);

-- Admin full access (requires authenticated user with admin role)
-- Note: You'll need to create these policies based on your auth setup

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to tables with updated_at
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_properties_updated_at
    BEFORE UPDATE ON properties
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_inquiries_updated_at
    BEFORE UPDATE ON inquiries
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at
    BEFORE UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to increment property views
CREATE OR REPLACE FUNCTION increment_property_views(property_id UUID)
RETURNS void AS $$
BEGIN
    UPDATE properties
    SET views = views + 1
    WHERE id = property_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- STORAGE BUCKETS (Run in Supabase Dashboard)
-- ============================================
-- Note: Create these buckets in Supabase Dashboard > Storage
-- 1. property-images (public)
-- 2. property-documents (private)
-- 3. blog-images (public)
-- 4. avatars (public)
