<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-blue?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Version-0.2.0-green?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
</p>

<h1 align="center">
  <br>
  🏢 Silverland99
  <br>
</h1>

<h4 align="center">Premium Real Estate Platform for Data Center Land</h4>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-database">Database</a> •
  <a href="#-api">API</a>
</p>

---

## 🎯 Overview

**Silverland99** is a specialized real estate platform focused on large land plots suitable for **Data Center** construction. We provide comprehensive infrastructure information including power capacity, water supply, fiber connectivity, and proximity to electrical substations.

### 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🔌 **Power Analysis** | Detailed electricity capacity & substation distance |
| 💧 **Water Assessment** | Cooling water source availability |
| 🌐 **Connectivity** | Fiber optic routes & internet infrastructure |
| 🗺️ **Location Intelligence** | Strategic positioning near ports, highways & airports |
| 📊 **DC Suitability Score** | Custom scoring for Data Center viability |

### 💰 Infrastructure Cost

| Service | Provider | Cost |
|---------|----------|------|
| Domain | Cloudflare Registrar | ~30 THB/month |
| Email | Cloudflare Email Routing | FREE |
| Hosting | Vercel | FREE |
| Database | Supabase | FREE |
| **Total** | | **~30 THB/month** |

---

## 🛠 Tech Stack

<table>
<tr>
<td>

### Frontend
```
Next.js 16      → App Router + RSC
TypeScript 5    → Type Safety
Tailwind CSS 4  → Styling
shadcn/ui       → Components
next-intl       → i18n (EN/TH)
```

</td>
<td>

### Backend
```
Next.js API     → Serverless Functions
Supabase        → PostgreSQL + Auth
Supabase Storage → File Management
Zod             → Validation
```

</td>
</tr>
<tr>
<td>

### Infrastructure
```
Vercel          → Hosting & Edge
Cloudflare      → DNS + CDN + Email
Supabase        → Database + Auth
```

</td>
<td>

### DevOps
```
Git             → Version Control
ESLint          → Code Quality
Prettier        → Formatting
```

</td>
</tr>
</table>

---

## 🗺 Roadmap

### Phase 1: Foundation ✅
> Week 1-2 | **COMPLETED**

<details>
<summary>📦 Project Setup</summary>

- [x] Initialize Next.js 16 with TypeScript
- [x] Configure Tailwind CSS 4
- [x] Setup ESLint & Prettier
- [x] Install shadcn/ui components
- [x] Setup folder structure
- [x] Configure environment variables
- [x] Setup i18n (EN/TH)

</details>

<details>
<summary>🗄️ Database Setup</summary>

- [x] Create Supabase project
- [x] Design database schema
- [x] Setup Row Level Security (RLS)
- [x] Create TypeScript types
- [x] Setup Supabase clients

</details>

<details>
<summary>🔐 Authentication</summary>

- [x] Configure Supabase Auth
- [x] Create login page
- [x] Setup protected routes
- [x] Create auth middleware

</details>

---

### Phase 2: Core Features 🚧
> Week 3-4 | **IN PROGRESS**

<details>
<summary>🎨 Layout & Navigation</summary>

- [x] Header component with i18n
- [x] Footer component with i18n
- [x] Mobile navigation (Sheet)
- [x] Language switcher (EN/TH)
- [ ] Loading states & skeletons

</details>

<details>
<summary>🏠 Homepage</summary>

- [x] Hero section
- [x] Statistics section
- [x] Features section
- [x] Featured properties placeholder
- [x] Why choose us section
- [x] CTA section
- [ ] Connect to real data

</details>

<details>
<summary>🏢 Property Listing</summary>

- [ ] Property card component
- [ ] Property grid/list view
- [ ] Search functionality
- [ ] Advanced filters
  - [ ] Price range
  - [ ] Area (rai)
  - [ ] Province/District
  - [ ] Infrastructure (power, water, fiber)
  - [ ] Data Center specific filters
- [ ] Pagination
- [ ] Sort options

</details>

<details>
<summary>📋 Property Detail</summary>

- [ ] Image gallery
- [ ] Property information
- [ ] Location map
- [ ] Infrastructure details
- [ ] DC Suitability score
- [ ] Inquiry form
- [ ] Related properties
- [ ] Social share

</details>

---

### Phase 3: Admin Dashboard ⏳
> Week 5-6 | **PLANNED**

<details>
<summary>📊 Dashboard</summary>

- [ ] Admin layout & sidebar
- [ ] Overview statistics
- [ ] Recent activities
- [ ] Quick actions

</details>

<details>
<summary>🏢 Property Management</summary>

- [ ] CRUD operations
- [ ] Multi-image upload
- [ ] Document management
- [ ] Publish/Draft toggle
- [ ] Featured toggle

</details>

<details>
<summary>👥 Lead Management</summary>

- [ ] Inquiry list & detail
- [ ] Status workflow
- [ ] Notes & follow-up
- [ ] Export to CSV

</details>

<details>
<summary>📝 Content Management</summary>

- [ ] Blog post CRUD
- [ ] Rich text editor
- [ ] Image management

</details>

---

### Phase 4: Advanced Features ⏳
> Week 7-8 | **PLANNED**

- [ ] Interactive map view
- [ ] Full-text search
- [ ] SEO optimization
- [ ] Email notifications
- [ ] Performance optimization

---

### Phase 5: Testing & Deployment ⏳
> Week 9-10 | **PLANNED**

- [ ] Unit & E2E tests
- [ ] Vercel deployment
- [ ] Cloudflare DNS setup
- [ ] Domain configuration
- [ ] Monitoring & analytics

---

### Phase 6: Launch ⏳
> Week 11+ | **PLANNED**

- [ ] Content population
- [ ] UAT testing
- [ ] Go live
- [ ] Post-launch iteration

---

## 🗄 Database

### Entity Relationship

```
┌─────────────┐     ┌─────────────────┐     ┌──────────────┐
│   users     │     │   properties    │     │  categories  │
├─────────────┤     ├─────────────────┤     ├──────────────┤
│ id (PK)     │     │ id (PK)         │     │ id (PK)      │
│ email       │     │ title           │     │ name         │
│ name        │     │ slug            │     │ slug         │
│ role        │     │ category_id ────┼────▶│ description  │
│ phone       │     │ price           │     └──────────────┘
│ avatar_url  │     │ area_rai        │
└─────────────┘     │ province        │     ┌──────────────┐
                    │ latitude        │     │   images     │
┌─────────────┐     │ longitude       │     ├──────────────┤
│  inquiries  │     │ zoning          │     │ id (PK)      │
├─────────────┤     │ electricity_mw  │◀────┤ property_id  │
│ id (PK)     │     │ water_supply    │     │ url          │
│ property_id─┼────▶│ internet_fiber  │     │ is_primary   │
│ name        │     │ nearby_substat  │     └──────────────┘
│ email       │     │ flood_free_yrs  │
│ phone       │     │ featured        │
│ message     │     │ status          │
│ status      │     └─────────────────┘
└─────────────┘
```

### Data Center Specific Fields

| Field | Type | Description |
|-------|------|-------------|
| `electricity_capacity_mw` | DECIMAL | Available power capacity |
| `nearby_substation` | VARCHAR | Nearest electrical substation |
| `distance_to_substation_km` | DECIMAL | Distance to substation |
| `power_capacity_potential_mw` | DECIMAL | Potential expandable power |
| `cooling_water_source` | TEXT | Water source for cooling systems |
| `flood_free_years` | INTEGER | Years without flooding |
| `seismic_zone` | VARCHAR | Earthquake risk classification |

---

## 🔌 API

### Public Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/properties` | List properties with filters |
| `GET` | `/api/properties/[slug]` | Get property detail |
| `GET` | `/api/properties/featured` | Get featured properties |
| `POST` | `/api/inquiries` | Submit inquiry |
| `GET` | `/api/posts` | List blog posts |
| `GET` | `/api/posts/[slug]` | Get post detail |

### Admin Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/admin/properties` | Create property |
| `PUT` | `/api/admin/properties/[id]` | Update property |
| `DELETE` | `/api/admin/properties/[id]` | Delete property |
| `POST` | `/api/admin/upload` | Upload file |
| `GET` | `/api/admin/inquiries` | List inquiries |
| `PUT` | `/api/admin/inquiries/[id]` | Update inquiry |

---

## ⚙️ Environment Variables

```env
# 🌐 App Configuration
NEXT_PUBLIC_APP_URL=https://silverland99.com
NEXT_PUBLIC_APP_NAME=Silverland99

# 🗄️ Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# 🗺️ Maps (Optional)
NEXT_PUBLIC_MAPBOX_TOKEN=pk.xxx

# 📧 Email (Optional)
RESEND_API_KEY=re_xxx

# 📊 Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-xxx
```

---

## 🚀 Future Enhancements

### Features Backlog

| Priority | Feature | Status |
|----------|---------|--------|
| 🔴 High | Property comparison tool | Planned |
| 🔴 High | Save/Favorite properties | Planned |
| 🟡 Medium | Email alerts for new properties | Planned |
| 🟡 Medium | Virtual tour integration | Planned |
| 🟡 Medium | WhatsApp/LINE integration | Planned |
| 🟢 Low | Property valuation calculator | Backlog |
| 🟢 Low | Data Center ROI calculator | Backlog |
| 🟢 Low | PWA support | Backlog |

---

## 📚 Resources

### Documentation
- [Next.js](https://nextjs.org/docs) - React Framework
- [Supabase](https://supabase.com/docs) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility CSS
- [shadcn/ui](https://ui.shadcn.com) - UI Components
- [next-intl](https://next-intl-docs.vercel.app) - Internationalization

### Inspiration
- [Zillow](https://www.zillow.com) - Real Estate Platform
- [DDproperty](https://www.ddproperty.com) - Thai Property
- [Baania](https://www.baania.com) - Property Analytics

---

## 📝 Changelog

### v0.2.0 (2025-11-20)
- ✅ Added i18n support (EN/TH)
- ✅ Created language switcher
- ✅ Updated Header/Footer with translations
- ✅ Connected Supabase database
- ✅ Created SQL migration

### v0.1.0 (2025-11-20)
- ✅ Project initialization
- ✅ Basic folder structure
- ✅ Homepage layout
- ✅ shadcn/ui components
- ✅ Supabase integration

---

<p align="center">
  <br>
  <strong>Built with ❤️ for the Data Center Industry</strong>
  <br>
  <br>
  <sub>© 2025 Silverland99. All rights reserved.</sub>
</p>
