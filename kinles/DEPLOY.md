# Deploying to Cloudflare Pages

Each site is a standalone Next.js app connected to its GitHub repo.

| Site | GitHub repo | Domain |
| --- | --- | --- |
| OTEVŘU | `radimski/otevru-cz` | www.otevru.cz |
| KINLES | `radimski/kinles-cz` | www.kinles.cz |
| Kolmo | `radimski/kolmo-kafe` | www.kolmokafe.cz |

## 1. Create Pages project

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Pick the repo and set **Production branch** to `main`
3. Framework preset: **Next.js** (Cloudflare auto-detect)
4. Root directory: `/` (repo root is already the site)

## 2. Environment variables (Production)

Set these in **Settings → Environment variables** for **Production** (not Preview unless testing):

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<site key from Turnstile widget>
TURNSTILE_SECRET_KEY=<secret key>
FORM_SECRET=<random string, 16+ chars>
FORM_ALLOWED_ORIGINS=www.otevru.cz
```

Use the real domain per project (`www.kinles.cz`, `www.kolmokafe.cz`).

Optional:

```bash
FACEBOOK_PAGE_ACCESS_TOKEN=...   # kolmokafe only
FACEBOOK_PAGE_ID=kolmokafe
```

Do **not** copy `.env.development` test Turnstile keys into Production.

## 3. Custom domain

1. Pages project → **Custom domains** → add `www.example.cz` and apex `example.cz`
2. Cloudflare will issue TLS and enable HTTP/2/3
3. Remove old DNS records pointing at Aruba (A/CNAME to old host)

## 4. Post-deploy checks

Re-run on the live URL:

- https://pagespeed.web.dev/
- https://securityheaders.com/
- https://developer.mozilla.org/en-US/observatory
- https://www.ssllabs.com/ssltest/

Expected after deploy: security headers from `next.config.ts`, HTTPS via Cloudflare, Turnstile on contact forms.

## 5. Forms & email

Submissions are stored under `.form-data/` on the server filesystem. On Cloudflare Pages this is ephemeral — wire SMTP or a webhook in `form-engine` before relying on forms in production, or forward forms to shared hosting `api/form.php`.
