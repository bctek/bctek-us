# BCTEK Project Context & Architectural Memory

This file serves as persistent contextual memory for AI agents scanning and working on this repository.

## 1. Project Identity & Location
- **Directory Root:** `/Users/bc/Projects/field-services`
- **Framework:** Astro v6 + Tailwind CSS + TypeScript + Cloudflare deployment (`@astrojs/cloudflare`).
- **Brand Name:** BCTEK / Field Services
- **Tagline:** "Site First Focus Team" — Next-Gen Systems Administration & On-Site IT Operations.

## 2. Redesign Strategy & Vision (New Approach)
- **Goal:** Redo the site completely with a fresh, modern aesthetic and clean brand disambiguation.
- **Brand Division:**
  1. **Systems & Cloud (Main Brand):** B2B Remote MSP, SaaS integration, Intune/Jamf MDM, Entra ID (Azure AD), Server migrations, identity automation.
  2. **Field Services Console (`/field-services`):** Commercial IT dispatch ("Boots on the ground") for network rack setups, POS integrations, hardware diagnostics, and workstation provisioning. *(Scope Note: B2B only — no residential, HVAC, or fiber).*

## 3. UI/UX & Design System Rules
- **Color Tokens:**
  - Base Dark: `#080b11` / `#1a1a24`
  - Primary Accent: Electric Cyan (`#00e5ff`)
  - Secondary Accent: Neon Purple/Violet (`#b721ff`)
  - Warning/Dispatch Accent: Amber Gold (`#ffbd2e`)
- **Visual Features:**
  - Mac window terminal frames (red, yellow, green status buttons).
  - Glassmorphic translucent cards with subtle glow borders (`border-white/10`, `backdrop-blur-md`).
  - Sleek modern typography (inter/mono combinations).

## 4. Key Files
- Layout: [src/layouts/BaseLayout.astro](file:///Users/bc/Projects/field-services/src/layouts/BaseLayout.astro)
- Navigation: [src/components/Navigation.astro](file:///Users/bc/Projects/field-services/src/components/Navigation.astro)
- Main Landing: [src/pages/index.astro](file:///Users/bc/Projects/field-services/src/pages/index.astro)
- Field Services Landing: [src/pages/field-services.astro](file:///Users/bc/Projects/field-services/src/pages/field-services.astro) or [src/pages/index.astro](file:///Users/bc/Projects/field-services/src/pages/index.astro)
