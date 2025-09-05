# Next.js + Tailwind CSS Starter (App Router, JS)

A clean, production-ready starter using **Next.js 14** (App Router) and **Tailwind CSS**.

## Features
- App Router (`/app`) with example nested route
- Tailwind CSS pre-configured
- Simple Navbar, Footer, and Card components
- Absolute imports via `@/`

## Getting Started
```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Build for production
npm run build && npm start
```

## Structure
```
app/
  layout.js
  page.js
  (marketing)/about/page.js
components/
  Navbar.jsx
  Footer.jsx
  ExampleCard.jsx
public/
  favicon.svg
tailwind.config.js
postcss.config.js
```

## Notes
- JavaScript version. If you prefer TypeScript, rename files to `.tsx`, add a `tsconfig.json`, and install `@types/react` etc.
- Update `tailwind.config.js` `content` paths if you add new folders.
