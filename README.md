# Website Workspace

A Next.js starter for building websites with TypeScript, Tailwind CSS, and a Czech legal compliance baseline.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:43123](http://localhost:43123) to preview the app.

Before launch, update operator details in `src/config/site.ts` and review `projects/LEGAL-CZ.md`.

## Project structure

```
src/
  app/                    # Pages, layouts, and routes
  components/             # Shared UI, cookie banner, footer
  config/site.ts          # Provozovatel – povinné údaje
projects/
  LEGAL-CZ.md             # Czech legislation checklist
public/                   # Static assets
```

## Legal pages (Czech Republic)

| Route | Purpose |
| --- | --- |
| `/provozovatel` | Operator identification (§ 435 OZ) |
| `/ochrana-osobnich-udaju` | GDPR privacy policy |
| `/cookies` | Cookie policy and consent categories |

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | Run ESLint               |
