# KOLMO kafe

Plain static HTML + PHP form API — same repo layout as [otevru-cz](https://github.com/radimski/otevru-cz).

**On GitHub:** `index.html`, `styles.css`, `main.js`, `form.js`, `api/`, `fonts/`, … at repo root.

**Local only (gitignored):** `build/`, `ftp/`, `DEPLOY.md`, `RULEBOOK.md`

## Preview

Cloudflare Pages — static files from repo root, no build step.

## FTP

```bash
node build/build.js && node build/css.js
node build/export.js
```

Upload contents of `ftp/`.

## Cloudflare Pages

Framework: None · Build: empty · Root: `/`
