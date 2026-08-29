# Adding a new site

Use this when creating **another client site** in the monorepo (future projects beyond otevru / kinles / kolmokafe).

All **agent documentation** is in **English**. **Public website copy** for Czech clients remains in **Czech**.

## 1. Scaffold

Copy an existing site folder as a template (e.g. `otevru/`) or run `create-next-app` into a new top-level folder, then add:

```
newsite/
├── packages/form-engine/     # vendored copy
├── packages/legal-cz/        # vendored copy
├── public/form.js
├── src/lib/security-headers.ts
├── src/app/api/form/route.ts
├── src/app/layout.tsx        # Turnstile + form.js + FormRouteBinder
├── .env.development          # Turnstile test keys
├── .env.example
├── DEPLOY.md
├── RULEBOOK.md               # copy from repo root
├── audit-pages.txt           # paths to audit (see below)
└── next.config.ts            # poweredByHeader: false + headers()
```

Register the site in root `README.md` and `RULEBOOK.md` §8.

## 2. Turnstile (mandatory for forms)

Same contract as existing sites — see `RULEBOOK.md` §1.

## 3. audit-pages.txt

List every URL path that must pass view-source audit before launch (one path per line, `#` comments allowed):

```
/
/kontakt
/pricing
```

Update this file whenever you add a launch-critical page.

Run audit:

```bash
./scripts/launch-audit.sh https://www.newsite.cz --file newsite/audit-pages.txt
```

## 4. Deploy

1. Create GitHub repo and Cloudflare Pages project
2. Set production env vars (Turnstile, `FORM_SECRET`, `FORM_ALLOWED_ORIGINS`)
3. Custom domain + DNS
4. Full launch audit on live URL
5. External scanners (PageSpeed, Security Headers, Observatory, SSL Labs)

## 5. Separate GitHub repo

Each site syncs to its own repo (subtree split or copy folder). Include `RULEBOOK.md`, `scripts/launch-audit.sh`, and `audit-pages.txt` in that repo.
