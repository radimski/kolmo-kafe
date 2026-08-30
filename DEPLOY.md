# Deploying Kolmo kafe to Cloudflare Pages

**Repo:** `radimski/kolmo-kafe` · **Domain:** www.kolmokafe.cz

## 1. Create Pages project

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Repository: `radimski/kolmo-kafe`, branch `main`
3. Framework: **Next.js** (auto-detect)

## 2. Production environment variables

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<Turnstile site key>
TURNSTILE_SECRET_KEY=<Turnstile secret>
FORM_SECRET=<random 16+ chars>
FORM_ALLOWED_ORIGINS=www.kolmokafe.cz
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=<smtp user>
SMTP_PASS=<smtp password>
SMTP_FROM=KOLMO kafe <info@kolmokafe.cz>
FACEBOOK_PAGE_ACCESS_TOKEN=<optional, for live FB photos/events>
FACEBOOK_PAGE_ID=kolmokafe
```

Do not use test keys from `.env.development` in Production.

## 3. Custom domain

Add `www.kolmokafe.cz` and `kolmokafe.cz`. Fix/remove broken Aruba TLS on current DNS.

## 4. Post-deploy checks

- https://pagespeed.web.dev/?url=https://www.kolmokafe.cz
- https://securityheaders.com/?q=https://www.kolmokafe.cz
- https://developer.mozilla.org/en-US/observatory/analyze?host=www.kolmokafe.cz
- https://www.ssllabs.com/ssltest/analyze.html?d=www.kolmokafe.cz

## 5. Forms

Set SMTP variables (see `.env.example`) so contact forms deliver email in production.
