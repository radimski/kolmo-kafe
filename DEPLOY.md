# Deploying Kolmo kafe

**Repo (private):** `radimski/kolmo-kafe`  
**Preview:** https://kolmo-kafe.radim-pajurek.workers.dev/  
**Domain:** www.kolmokafe.cz

Push `main` → Cloudflare Workers Builds deploys automatically. No FTP.

After the repo was made private, GitHub → Settings → Applications → **Cloudflare Workers and Pages** must include this repository (or All repositories).

Build command: `npm run build` · Deploy: `npx opennextjs-cloudflare deploy` · Node **22**.

`.cz` DNS is still FORPSI until nameservers move to Cloudflare.

## Production environment variables

Worker → **Settings → Variables**:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<Turnstile site key>
TURNSTILE_SECRET_KEY=<Turnstile secret>
FORM_SECRET=<random 16+ chars>
FORM_ALLOWED_ORIGINS=www.kolmokafe.cz
```

Do not use test keys from `.env.development` in Production.
