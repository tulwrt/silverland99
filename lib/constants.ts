// Site configuration
export const siteConfig = {
  name: 'Silverland99',
  description: 'แพลตฟอร์มขายอสังหาริมทรัพย์เน้นแปลงขนาดใหญ่สำหรับ Data Center',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://silverland99.com',
  ogImage: '/og-image.jpg',
  links: {
    facebook: 'https://facebook.com/silverland99',
    line: 'https://line.me/silverland99',
  },
  contact: {
    email: 'contact@silverland99.com',
    phone: '02-xxx-xxxx',
    address: 'กรุงเทพมหานคร, ประเทศไทย',
  },
}

// Navigation
export const mainNavItems = [
  { title: 'หน้าหลัก', href: '/' },
  { title: 'อสังหาริมทรัพย์', href: '/properties' },
  { title: 'บริการ', href: '/services' },
  { title: 'บทความ', href: '/blog' },
  { title: 'เกี่ยวกับเรา', href: '/about' },
  { title: 'ติดต่อ', href: '/contact' },
]

export const adminNavItems = [
  { title: 'Dashboard', href: '/admin/dashboard', icon: 'LayoutDashboard' },
  { title: 'อสังหาริมทรัพย์', href: '/admin/properties', icon: 'Building' },
  { title: 'ลูกค้า', href: '/admin/customers', icon: 'Users' },
  { title: 'บทความ', href: '/admin/blog', icon: 'FileText' },
  { title: 'รายงาน', href: '/admin/reports', icon: 'BarChart' },
  { title: 'ตั้งค่า', href: '/admin/settings', icon: 'Settings' },
]

// Property options
export const propertyTypes = [
  { value: 'land', label: 'ที่ดินเปล่า' },
  { value: 'land_with_building', label: 'ที่ดินพร้อมสิ่งปลูกสร้าง' },
  { value: 'industrial', label: 'โรงงาน/คลังสินค้า' },
]

export const zoningTypes = [
  { value: 'industrial', label: 'อุตสาหกรรม' },
  { value: 'commercial', label: 'พาณิชยกรรม' },
  { value: 'residential', label: 'ที่อยู่อาศัย' },
  { value: 'agricultural', label: 'เกษตรกรรม' },
  { value: 'mixed', label: 'ผสม' },
]

export const propertyStatuses = [
  { value: 'draft', label: 'ฉบับร่าง' },
  { value: 'published', label: 'เผยแพร่' },
  { value: 'sold', label: 'ขายแล้ว' },
  { value: 'reserved', label: 'จอง' },
]

export const inquiryStatuses = [
  { value: 'new', label: 'ใหม่' },
  { value: 'contacted', label: 'ติดต่อแล้ว' },
  { value: 'qualified', label: 'สนใจจริง' },
  { value: 'closed', label: 'ปิดการขาย' },
]

export const titleDeedTypes = [
  { value: 'chanote', label: 'โฉนด (น.ส.4)' },
  { value: 'nor_sor_3_gor', label: 'น.ส.3 ก.' },
  { value: 'nor_sor_3', label: 'น.ส.3' },
  { value: 'sor_por_kor', label: 'ส.ป.ก.' },
]

export const budgetRanges = [
  { value: 'under_10m', label: 'ต่ำกว่า 10 ล้านบาท' },
  { value: '10m_50m', label: '10 - 50 ล้านบาท' },
  { value: '50m_100m', label: '50 - 100 ล้านบาท' },
  { value: '100m_500m', label: '100 - 500 ล้านบาท' },
  { value: 'over_500m', label: 'มากกว่า 500 ล้านบาท' },
]

export const timelines = [
  { value: 'immediate', label: 'ทันที' },
  { value: '1_3_months', label: '1 - 3 เดือน' },
  { value: '3_6_months', label: '3 - 6 เดือน' },
  { value: '6_12_months', label: '6 - 12 เดือน' },
  { value: 'over_1_year', label: 'มากกว่า 1 ปี' },
]

// Thai provinces (partial list - expand as needed)
export const provinces = [
  { value: 'bangkok', label: 'กรุงเทพมหานคร' },
  { value: 'nonthaburi', label: 'นนทบุรี' },
  { value: 'pathum_thani', label: 'ปทุมธานี' },
  { value: 'samut_prakan', label: 'สมุทรปราการ' },
  { value: 'samut_sakhon', label: 'สมุทรสาคร' },
  { value: 'nakhon_pathom', label: 'นครปฐม' },
  { value: 'ayutthaya', label: 'พระนครศรีอยุธยา' },
  { value: 'chonburi', label: 'ชลบุรี' },
  { value: 'rayong', label: 'ระยอง' },
  { value: 'chachoengsao', label: 'ฉะเชิงเทรา' },
  { value: 'saraburi', label: 'สระบุรี' },
  { value: 'nakhon_ratchasima', label: 'นครราชสีมา' },
  { value: 'khon_kaen', label: 'ขอนแก่น' },
  { value: 'chiang_mai', label: 'เชียงใหม่' },
  { value: 'songkhla', label: 'สงขลา' },
  { value: 'phuket', label: 'ภูเก็ต' },
]

// Pagination
export const DEFAULT_PAGE_SIZE = 12
export const PAGE_SIZE_OPTIONS = [12, 24, 48]
