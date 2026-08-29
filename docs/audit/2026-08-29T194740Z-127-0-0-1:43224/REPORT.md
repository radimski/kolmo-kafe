# Audit capture — 127.0.0.1:43224

- **Date (UTC):** 2026-08-29T194740Z
- **Base URL:** http://127.0.0.1:43224
- **Contact path:** /kontakt

## Step 1 — view-source files

- [`view-source-home.html`](./view-source-home.html)
- [`view-source-contact.html`](./view-source-contact.html)

## Step 1 — automated signals

### view-source-contact.html

- **bytes:** 30336 
- **lang_cs:** True 
- **viewport:** True 
- **turnstile_attr:** True 
- **turnstile_mount:** True 
- **test_turnstile_key:** False 
- **http_assets:** 0 
- **form_js:** True 
- **json_ld:** True 

### view-source-home.html

- **bytes:** 49290 
- **lang_cs:** True 
- **viewport:** True 
- **turnstile_attr:** True 
- **turnstile_mount:** True 
- **test_turnstile_key:** False 
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
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://*.fbcdn.net; font-src 'self'; connect-src 'self' https://challenges.cloudflare.com; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests
Cross-Origin-Opener-Policy: same-origin
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
x-nextjs-cache: HIT
x-nextjs-prerender: 1
x-nextjs-prerender: 1
x-nextjs-stale-time: 300
Cache-Control: s-maxage=31536000
ETag: "odhbg7k1ig1216"
Content-Type: text/html; charset=utf-8
Content-Length: 50159
Date: Sat, 29 Aug 2026 19:47:40 GMT
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
| PageSpeed | https://pagespeed.web.dev/analysis?url=http%3A%2F%2F127.0.0.1%3A43224%2F |
| Security Headers | https://securityheaders.com/?q=http%3A%2F%2F127.0.0.1%3A43224%2F&followRedirects=on |
| Mozilla Observatory | https://observatory.mozilla.org/analyze/127.0.0.1:43224 |
| SSL Labs | https://www.ssllabs.com/ssltest/analyze.html?d=127.0.0.1:43224 |

## Turnstile checklist

- [ ] `data-turnstile-site-key` in HTML (production: real key, not test key)
- [ ] `data-turnstile` mount on contact form
- [ ] `/form.js` loaded
- [ ] Production env: `TURNSTILE_SECRET_KEY` + `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
