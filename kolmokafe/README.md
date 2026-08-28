# Kolmo kafe

Website for **KOLMO kafe** — bistro a kavárna u přehrady Olešná (Resort Olešná, Frýdek-Místek).

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

- Fill in legal operator data in `src/config/operator.ts` (IČO still TBD)
- Set `FORM_SECRET` and SMTP for production forms
- Add hero photography (terrace, lake, food)
- Point `kolmokafe.cz` at this deployment
