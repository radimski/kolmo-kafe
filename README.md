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

## Creating separate repositories

To publish each site as its own repo, initialize git inside the project folder (or use `git subtree split` / copy the folder). Each directory already has everything needed to build and deploy independently.
