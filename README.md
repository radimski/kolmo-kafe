# Websites

Monorepo for three client websites. Each site is a standalone Next.js app with
its own design, dependencies, dev server, and deployment target.

## Sites

| Site | Folder | Dev port | Client |
| --- | --- | --- | --- |
| [otevru.cz](./sites/otevru/) | `sites/otevru` | 43124 | Patrik Panenka — zámečnická pohotovost |
| [kinles.cz](./sites/kinles/) | `sites/kinles` | 43125 | KINLES Ostrava s.r.o. — zámečnictví a bezpečnostní technika |
| Kolmo kafe | `sites/kolmokafe` | 43126 | Bistro-kavárna u přehrady Olešná |

## Getting started

```bash
npm install
```

Run everything at once:

```bash
npm run dev
```

Or one site at a time:

```bash
npm run dev:otevru      # http://localhost:43124
npm run dev:kinles      # http://localhost:43125
npm run dev:kolmokafe   # http://localhost:43126
```

Build and lint:

```bash
npm run build           # all sites
npm run build:kinles    # one site
npm run lint            # all sites
```

## Structure

```
packages/
  legal-cz/             Shared Czech legal texts + cookie-consent logic
  form-engine/          Vendored form engine + Next.js route handler
sites/
  otevru/               Standalone Next.js app
  kinles/               Standalone Next.js app
  kolmokafe/            Standalone Next.js app
projects/               Client briefs and research notes
```

Each site follows the same internal layout:

```
sites/<name>/
  src/app/              Routes (App Router) + site stylesheet
  src/components/       Nav, Footer, forms, cookie banner, legal shell
  src/config/site.ts    Content and contact details
  src/config/operator.ts Legal operator data (§ 435 OZ)
  public/               Logo and static assets
```

## Shared legal package

`@websites/legal-cz` holds the Czech legal content and consent logic so the
wording stays consistent across sites, while each site renders it in its own
design:

- `buildPrivacySections(operator)` — GDPR privacy policy (zákon č. 110/2019 Sb.)
- `buildCookieSections()` — cookie policy (zákon č. 127/2005 Sb.)
- `buildOperatorRows(operator)` — mandatory identification (§ 435 OZ)
- cookie-consent storage, namespaced per site so consents don't collide

Consumed via `transpilePackages` in each site's `next.config.ts`.

## Legal pages

Every site ships `/provozovatel`, `/ochrana-osobnich-udaju`, `/cookies`, and an
opt-in cookie banner with a "Nastavení cookies" link in the footer. See
[projects/LEGAL-CZ.md](./projects/LEGAL-CZ.md) for the compliance checklist.

## Contact forms

All three sites use the shared `@websites/form-engine` package (vendored from
[mar-ha-90/web_form](https://github.com/mar-ha-90/web_form)):

- browser client: `public/form.js` (progressive enhancement over `[data-form]` markup)
- server: `src/app/api/form/route.ts` (nonce tokens, validation, rate limits)
- schema: `src/config/forms.json` (single source of truth per site)

Submissions are stored locally under `sites/<name>/.form-data/<siteId>/` as
`.jsonl` records and `.eml` outbox files. For production, wire SMTP or a
transactional provider into the handler and set `FORM_SECRET`.

## Before launch

- Fill in real operator data in each `src/config/operator.ts`
  (Kolmo kafe still has placeholders — IČO not yet confirmed).
- Have the legal texts reviewed by a lawyer.
- Point each site at its own domain.
