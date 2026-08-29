<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Web Forge

Before shipping **any site or page** in this repo (current or future), read [`RULEBOOK.md`](./RULEBOOK.md) (English).

Quick checks:

- **Turnstile** on every contact/inquiry form — see rulebook §1
- **Pre-launch audit:** `./scripts/launch-audit.sh https://www.<domain>.cz --file <site>/audit-pages.txt`
- **New page?** Add its path to `<site>/audit-pages.txt` and re-run the audit
- **New site?** See [`docs/NEW-SITE.md`](./docs/NEW-SITE.md)
- **Security headers** in `next.config.ts` — update CSP when adding third-party scripts

Site-facing user copy stays in **Czech** for `.cz` clients; agent/rulebook text stays in **English**.
