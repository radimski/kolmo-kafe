# Kolmo kafe

Website for **KOLMO kafe** — bistro a kavárna u přehrady Olešná (Resort Olešná, Frýdek-Místek).

**Local path:** `/workspace/kolmokafe/` · **GitHub (private):** [radimski/kolmo-kafe](https://github.com/radimski/kolmo-kafe) · **Preview:** [kolmo-kafe.radim-pajurek.workers.dev](https://kolmo-kafe.radim-pajurek.workers.dev/) · **Ship:** `git push origin main` → Cloudflare auto-deploy

See [../SITES.md](../SITES.md) for all paths and URLs across sites.

## Run locally

```bash
npm install
npm run dev      # http://localhost:43126
npm run build
npm run start
```

## Structure

```
src/              Next.js app (App Router)
public/           Logo and static assets
packages/
  legal-cz/       Czech GDPR, cookies, operator content
  form-engine/    Contact form handler + browser client
docs/             Client brief and legal checklist
```

## Before launch

- Operator data is in `src/config/operator.ts` (KOLMO motion s.r.o., IČO 08011150)
- Set `FORM_SECRET`, Turnstile keys (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`), and SMTP vars for production forms
- Add hero photography (terrace, lake, food)
- Point `kolmokafe.cz` at this deployment
