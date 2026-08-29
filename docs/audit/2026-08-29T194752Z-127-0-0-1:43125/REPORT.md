# Audit capture — 127.0.0.1:43125

- **Date (UTC):** 2026-08-29T194752Z
- **Base URL:** http://127.0.0.1:43125
- **Contact path:** /

## Step 1 — view-source files

- [`view-source-home.html`](./view-source-home.html)
- [`view-source-contact.html`](./view-source-contact.html)

## Step 1 — automated signals

### view-source-contact.html

- **bytes:** 57222 
- **lang_cs:** True 
- **viewport:** True 
- **turnstile_attr:** True 
- **turnstile_mount:** True 
- **test_turnstile_key:** True ⚠️
- **http_assets:** 0 
- **form_js:** True 
- **json_ld:** True 

### view-source-home.html

- **bytes:** 57222 
- **lang_cs:** True 
- **viewport:** True 
- **turnstile_attr:** True 
- **turnstile_mount:** True 
- **test_turnstile_key:** True ⚠️
- **http_assets:** 0 
- **form_js:** True 
- **json_ld:** True 

## Response headers (homepage)

```
HTTP/1.1 200 OK
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.fbcdn.net; font-src 'self'; connect-src 'self' https://challenges.cloudflare.com; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'
Cross-Origin-Opener-Policy: same-origin
Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
Link: </_next/static/media/558ca1a6aa3cb55e-s.p.woff2?v=1788032873060>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/591e43f23f51e5a5-s.p.woff2?v=1788032873060>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/6d831b18ae5b01dc-s.p.woff2?v=1788032873060>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/97ac91773d3121b2-s.p.woff2?v=1788032873060>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/f39fb73de5e89135.p.woff2?v=1788032873060>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </_next/static/media/f711afda2794f4e2.p.woff2?v=1788032873060>; rel=preload; as="font"; crossorigin=""; type="font/woff2"
Cache-Control: no-cache, must-revalidate
Content-Type: text/html; charset=utf-8
Date: Sat, 29 Aug 2026 19:47:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

```

## Step 2 — multi-model review (manual / agent)

Review saved HTML from three perspectives:
1. **Security** — CSP, Turnstile, secrets, third-party scripts
2. **Performance** — HTML size, script count, images
3. **SEO / a11y** — meta, headings, structured data

## Step 3 — external scanners

| Tool | Link |
| --- | --- |
| PageSpeed | https://pagespeed.web.dev/analysis?url=http%3A%2F%2F127.0.0.1%3A43125%2F |
| Security Headers | https://securityheaders.com/?q=http%3A%2F%2F127.0.0.1%3A43125%2F&followRedirects=on |
| Mozilla Observatory | https://observatory.mozilla.org/analyze/127.0.0.1:43125 |
| SSL Labs | https://www.ssllabs.com/ssltest/analyze.html?d=127.0.0.1:43125 |

## Turnstile checklist

- [ ] `data-turnstile-site-key` in HTML (production: real key, not test key)
- [ ] `data-turnstile` mount on contact form
- [ ] `/form.js` loaded
- [ ] Production env: `TURNSTILE_SECRET_KEY` + `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
