# Kolmo kafe

Website for **KOLMO kafe** — bistro a kavárna u přehrady Olešná (Resort Olešná, Frýdek-Místek).

## Run locally

```bash
npm install
npm run dev      # http://localhost:43126
npm run build
npm run start
```

## Structure

```
src/              Next.js app (App Router)
public/           Logo and static assets
packages/
  legal-cz/       Czech GDPR, cookies, operator content
  form-engine/    Contact form handler + browser client
docs/             Client brief and legal checklist
```

## Facebook integration

### Latest post (homepage window)

The styled “Facebook window” on `/` and `/akce` shows the most recent post from [facebook.com/kolmokafe](https://www.facebook.com/kolmokafe).

1. **Automatic** — set `FACEBOOK_PAGE_ACCESS_TOKEN` (Page access token for a page admin).
2. **Manual fallback** — edit `src/config/latest-post.json` with the latest post text, date, link, and optional image URL.

Posts refresh every 30 minutes when the token is set.

### Events (`/akce`)

Upcoming events use the same token plus `src/config/events.json` as fallback. See the events section below in this README for details.

## Facebook events

The `/akce` page and homepage events block show upcoming events from:

1. **Facebook Graph API** (automatic) when these env vars are set:
   - `FACEBOOK_PAGE_ACCESS_TOKEN` — Page access token for [kolmokafe](https://www.facebook.com/kolmokafe) (page admin)
   - `FACEBOOK_PAGE_ID` — optional, defaults to `kolmokafe`

2. **`src/config/events.json`** — manual fallback / supplement when the API is unavailable.

Facebook restricts event API access for most apps; a **Page access token** from someone who administers the KOLMO kafe page usually works. Events refresh every hour.

To add an event manually, edit `src/config/events.json`:

```json
{
  "id": "unique-id",
  "title": "Název akce",
  "startAt": "2026-09-05T16:00:00+02:00",
  "endAt": "2026-09-05T22:00:00+02:00",
  "location": "KOLMO kafe · Resort Olešná",
  "url": "https://www.facebook.com/events/…/",
  "source": "manual"
}
```

## Before launch

- Fill in legal operator data in `src/config/operator.ts` (IČO still TBD)
- Set `FORM_SECRET` and SMTP for production forms
- Add hero photography (terrace, lake, food)
- Point `kolmokafe.cz` at this deployment
