# KOLMO kafe

Plain static HTML — same layout as the original Next.js site.

**On GitHub:** `index.html`, `main.js`, `form.js`, `api/`, `fonts/`, … at repo root (like otevru-cz).

**Local only (gitignored):** `build/`, `ftp/`, `DEPLOY.md`, `RULEBOOK.md`

## Preview

```bash
npm run build
npm run serve
# → http://localhost:4321
```

## FTP

```bash
npm run build
npm run export
```

Upload **contents** of `ftp/` to web root. On server: copy `api/config.example.php` → `api/config.php` and fill secrets.

## Cloudflare Pages

Framework: None · Build: empty · Root: `/`
