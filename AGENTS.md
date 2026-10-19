# Agent entry point — kolmokafe.cz (Kolmo kafe, bistro)

Read before any work in this repo:

1. `../_rules/rulebook.md` — canonical technical rulebook for every REDEYE site (folder structure, build pipeline, forms, security headers, cookie consent, pre-launch checklist). Rules marked **[HARD]** are not optional.
2. `../_build_tools/` — the generator, photo/font pipelines, header emitter, export step, analysis scripts. Start from here, not a blank folder.
3. `../REDEYE T SOLUTIONS/redeye-playbook.md` — REDEYE's business layer: positioning, pricing tiers, portfolio rules, brand story.
4. Before calling this site launch-ready: run it against `../REDEYE T SOLUTIONS/AUDITY/redeye-launch-checklist.html` (sections A–G), on mobile (375px) and desktop (1440px+) — or ask Claude to run the `redeye-site-launch-audit` skill.

## This project's deviations from the standard layout

Flat layout (`index.html`, `build/`, `ftp/`, `api/` at repo root) — same fleet-wide note as otevru-cz/AGENTS.md. This repo previously carried two full copies of the rulebook (`RULEBOOK.md` and `RULEBOOK-STATIC.md`); both are now redirect stubs pointing here, so there is only one canonical copy (`../_rules/rulebook.md`) to keep current.
