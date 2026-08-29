# Audit capture — www.otevru.cz

- **Date (UTC):** 2026-08-29T194737Z
- **Base URL:** https://www.otevru.cz
- **Contact path:** /kontakt

## Step 1 — view-source files

- [`view-source-home.html`](./view-source-home.html)
- [`view-source-contact.html`](./view-source-contact.html)

## Step 1 — automated signals

### view-source-contact.html

- **bytes:** 4518 
- **lang_cs:** False 
- **viewport:** True 
- **turnstile_attr:** False 
- **turnstile_mount:** False 
- **test_turnstile_key:** False 
- **http_assets:** 0 
- **form_js:** False 
- **json_ld:** False 

### view-source-home.html

- **bytes:** 12401 
- **lang_cs:** False 
- **viewport:** True 
- **turnstile_attr:** False 
- **turnstile_mount:** False 
- **test_turnstile_key:** False 
- **http_assets:** 1 ⚠️
- **form_js:** False 
- **json_ld:** False 

## Response headers (homepage)

```
HTTP/2 200 
server: aruba-proxy
date: Sat, 29 Aug 2026 19:47:38 GMT
content-type: text/html
vary: Accept-Encoding
last-modified: Sun, 26 Jun 2022 12:39:40 GMT
x-servername: ipvsproxy002
x-aruba-cache: HIT
alt-svc: h3=":443"; ma=86400

```

## Step 2 — multi-model review (manual / agent)

Review saved HTML from three perspectives:
1. **Security** — CSP, Turnstile, secrets, third-party scripts
2. **Performance** — HTML size, script count, images
3. **SEO / a11y** — meta, headings, structured data

## Step 3 — external scanners

| Tool | Link |
| --- | --- |
| PageSpeed | https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.otevru.cz%2F |
| Security Headers | https://securityheaders.com/?q=https%3A%2F%2Fwww.otevru.cz%2F&followRedirects=on |
| Mozilla Observatory | https://observatory.mozilla.org/analyze/www.otevru.cz |
| SSL Labs | https://www.ssllabs.com/ssltest/analyze.html?d=www.otevru.cz |

## Turnstile checklist

- [ ] `data-turnstile-site-key` in HTML (production: real key, not test key)
- [ ] `data-turnstile` mount on contact form
- [ ] `/form.js` loaded
- [ ] Production env: `TURNSTILE_SECRET_KEY` + `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
