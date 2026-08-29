# Client websites

Three independent Next.js projects — each can be cloned, deployed, and maintained on its own.

| Project | Folder | Domain | Dev port |
| --- | --- | --- | --- |
| OTEVŘU | [`otevru/`](./otevru/) | otevru.cz | 43124 |
| KINLES | [`kinles/`](./kinles/) | kinles.cz | 43125 |
| Kolmo kafe | [`kolmokafe/`](./kolmokafe/) | kolmokafe.cz | 43126 |

## Quick start

Each project is self-contained. From its folder:

```bash
cd otevru    # or kinles / kolmokafe
npm install
npm run dev
```

Shared code (`legal-cz`, `form-engine`) lives inside each project's `packages/` folder so deployments do not depend on a parent monorepo.

## Before going live

Each site needs these steps once before production:

1. **Forms** — set `FORM_SECRET` (≥16 characters), **Cloudflare Turnstile** keys (`NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` in your host's env), and wire SMTP / mail delivery in `form-engine`. Local dev loads always-pass Turnstile test keys from each project's `.env.development`.
2. **Domain** — point DNS at your host and set `FORM_ALLOWED_ORIGINS` to the live URL.
3. **Legal** — have a lawyer skim GDPR / cookie texts in `packages/legal-cz` (templates are in place).
4. **Site-specific**
   - **otevru** — confirm hours and service area with Patrik Panenka.
   - **kinles** — confirm split lunch hours (8:30–12:00, 12:30–17:00) on site match reality.
   - **kolmokafe** — set `FACEBOOK_PAGE_ACCESS_TOKEN` for live photos/events; hours are seasonal (Facebook is source of truth).

All three sites include `/provozovatel`, `/ochrana-osobnich-udaju`, `/cookies`, and cookie consent.

Security headers (CSP, HSTS, X-Frame-Options, etc.) are configured in each site's `next.config.ts`. See [DEPLOY.md](./DEPLOY.md) for Cloudflare Pages setup and post-deploy checks.

## Creating separate repositories

To publish each site as its own repo, initialize git inside the project folder (or use `git subtree split` / copy the folder). Each directory already has everything needed to build and deploy independently.
