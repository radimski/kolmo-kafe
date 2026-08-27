# Projects

Active website projects in this workspace.

| Project | Domain / presence | Status |
| --- | --- | --- |
| [otevru](./otevru/) | [otevru.cz](https://www.otevru.cz) | Live site — locksmith / security (Patrik Panenka) |
| [kinles](./kinles/) | kinles.cz (down) · dvereov.cz | Corporate — fire doors & walls (KINLES Ostrava s.r.o.) |
| [kolmokafe](./kolmokafe/) | Facebook only · kolmokafe.cz TBD | Greenfield — bistro café at Olešná |

## Layout per project

```
projects/<name>/
  README.md      # brief, contacts, pages, open questions
```

Site builds live in `src/` (shared Next.js app) until we split into separate apps or deploy targets.

## Shared legal baseline

Czech GDPR, cookies, and operator pages: see [LEGAL-CZ.md](./LEGAL-CZ.md). Each project gets its own `site.ts` values when we build.
