<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Web Forge

Before shipping changes to **otevru**, **kinles**, or **kolmokafe**, read [`RULEBOOK.md`](./RULEBOOK.md).

Quick checks:

- **Turnstile** on every contact form (see rulebook §1)
- **Pre-launch audit:** `./scripts/launch-audit.sh https://www.<domain>.cz` (kinles: use `/` as contact path — form is on homepage)
- **Security headers** in `next.config.ts` — do not remove without updating CSP
