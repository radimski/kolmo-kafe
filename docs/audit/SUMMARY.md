# Latest audit summary — 2026-08-29

Run `./scripts/launch-audit.sh https://www.<domain>.cz` after DNS cutover and update this file.

## Production domains (live today)

| Domain | Stack | Turnstile | Security headers | TLS |
| --- | --- | --- | --- | --- |
| www.otevru.cz | **Old Aruba (2022)** | ❌ | ❌ Grade F | ✅ HTTPS |
| www.kinles.cz | **Broken** (Aruba DNS) | — | — | ❌ handshake fails |
| www.kolmokafe.cz | **Broken** (Aruba DNS) | — | — | ❌ handshake fails |

**Launch blocker:** DNS still on old hosting. New Next.js apps not served on production URLs.

## New apps (local dev / production build)

| Site | Turnstile widget | Test key in HTML (dev) | Security headers (prod build) |
| --- | --- | --- | --- |
| otevru | ✅ | ⚠️ expected in dev | ✅ CSP, HSTS, XFO, … |
| kinles | ✅ | ⚠️ expected in dev | ✅ (same pattern) |
| kolmo | ✅ | ⚠️ expected in dev | ✅ (same pattern) |

Production build (`next start`) does **not** embed test Turnstile key when `NEXT_PUBLIC_*` unset at build time.

## External scanners (run on prod after deploy)

| Tool | otevru.cz (old prod) | New app (after Cloudflare) |
| --- | --- | --- |
| [PageSpeed](https://pagespeed.web.dev/) | Run manually | Target mobile perf ≥ 85 |
| [Security Headers](https://securityheaders.com/) | **F** | Target **A** / **A+** |
| [Observatory](https://observatory.mozilla.org/) | Run after deploy | Target **B+** |
| [SSL Labs](https://www.ssllabs.com/ssltest/) | Run after deploy | Target **A** |

## Multi-model review (new Next.js code)

### Security — OK with prod env
Turnstile server + client wired; CSP allows Cloudflare; forms use nonce + honeypot. **BLOCK** until production Turnstile keys set in Cloudflare Pages env.

### Performance — WARN
Dev HTML ~50–57 KB (RSC). Prod static build smaller. otevru `logo.gif` could be WebP.

### SEO / a11y — OK
`lang=cs`, JSON-LD, OG on all sites, mobile nav, cookie banner. Verify `aggregateRating` against real reviews.

## Captures

Timestamped reports under `docs/audit/2026-08-29T*/`.
