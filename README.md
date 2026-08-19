# Lunar Pearl — Crafted Gifts & Interactive Design Studio 🎁✨

> **"Gifts That Speak from the Heart"**  
> An artisanal e-commerce experience and interactive design sandbox for personalized gifting, built with React, Vite, Tailwind CSS, and Framer Motion.

[![Live Demo](https://img.shields.io/badge/Demo-Live%20URL-be9456?style=for-the-badge&logo=vercel&logoColor=white)](https://lunarpearl.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Tailwind-black?style=for-the-badge&logo=react)](https://react.dev)

---

## 🌟 Highlights & Key Features

### 1. 🎨 Interactive Real-Time Design Studio (The Sandbox)
* **Live Product Preview:** Customize engraved mugs (Imperial Gold & Crimson Red) and vintage Polaroid memory frames with immediate visual feedback.
* **Realistic Engraving & Typography:** Dynamic text overlays with subtle skew, perspective, and cursive typography rendered directly on product assets.
* **Direct Cart & WhatsApp Ingestion:** Seamlessly add personalized designs to the bag with custom metadata, or generate a prefilled, structured WhatsApp order message in one click.

### 2. 📱 Mobile-First Craft & Responsive Architecture
* **Docked Bottom Navigation:** Glassmorphic bottom dock on mobile devices with quick access to *Home*, *Occasions*, *Studio*, *Bag (with live counter)*, and *WhatsApp*.
* **Restrained Motion:** Tasteful entrance animations and scroll transitions powered by Framer Motion that earn their keep without layout lag.
* **Zero Horizontal Scroll:** Tested and optimized across 390px mobile viewports through 1440px+ ultra-wide desktop screens.

### 3. 🛍️ Occasion-Based Catalog & Multi-Route Shopping
* **Curated Gift Occasions:** Dedicated collections for birthdays, anniversaries, best friends, farewells, and everyday memories.
* **Shimmer Skeleton Loading:** Smooth pulse placeholders during image hydration.
* **Local State Persistence:** Global `CartContext` with `localStorage` synchronization for instant session restore.

### 4. 💛 Hidden Easter Egg
* Type keywords like `LOVE`, `LUNAR`, or `HEART` into the Design Studio's engraving input to unlock a golden floating hearts particle flurry and secret badge.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) (Custom Typography, Glassmorphism, CSS Grid) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Icons & Media** | Handcrafted SVG icons & WebP compressed visual assets |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🎨 Design System & Palette

* **Primary Accent:** Warm Gold (`#be9456` / `#b58953`)
* **Charcoal Slate:** `#2b2724` / `#3a3532`
* **Card Backing:** Translucent Warm Cream (`#faf8f5` / `#fbfaf8`)
* **Typography:**
  * Headings: *Playfair Display* & *Style Script*
  * Body & UI: *Montserrat*

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arnavprajapati/iqra-studio.git
   cd iqra-studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📄 Architectural Decisions (DECISIONS.md)

Detailed answers to the assessment questionnaire regarding ingestion strategies, time-limit trade-offs, and verification workflows can be found in [`DECISIONS.md`](./DECISIONS.md).
