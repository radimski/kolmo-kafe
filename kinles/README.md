# kinles.cz

Website for **KINLES Ostrava s.r.o.** — zámečnictví, bezpečnostní a protipožární dveře, trezory, Jablotron (Hlučín).

## Run locally

```bash
npm install
npm run dev      # http://localhost:43125
npm run build
npm run start
```

## Structure

```
src/              Next.js app (App Router)
public/           Static assets
packages/
  legal-cz/       Czech GDPR, cookies, operator content
  form-engine/    Inquiry form handler + browser client
docs/             Client brief and legal checklist
```

## Before launch

- Confirm operator data in `src/config/operator.ts`
- Set `FORM_SECRET`, Turnstile keys (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`), and SMTP for production forms
- Have legal texts reviewed by a lawyer
- Point `kinles.cz` at this deployment
