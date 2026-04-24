# Swiggy Lunch Bot

**Slack-native group lunch orders** backed by the Swiggy Food MCP — vote on cuisines, resolve one restaurant and cart within budget, place the order, and post a bill split to the thread.

![Demo placeholder](https://via.placeholder.com/720x400/1a1d21/e37f0a?text=Add+a+GIF+or+screenshot+of+demo%2Findex.html)

Replace the image above with a short screen recording (GIF or MP4 in the repo) of the four-step demo: slash command → votes → match → bill split.

## Problem

Team lunch on Swiggy devolves into long threads and mismatched carts. **Swiggy Lunch Bot** centralizes the decision: one slash command sets budget and headcount, the team votes on mood, and the bot uses MCP-backed search and menu data to propose a single optimized order. One confirmation places the order; everyone sees what they owe.

## Live demo

Static UI mock lives in **`demo/index.html`**. Host it anywhere static files are served.

**Vercel (about two minutes)**

1. Push this repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Framework preset: **Other**; root directory: repo root.
3. Add a `vercel.json` if you want the site root to open the demo:

```json
{
  "rewrites": [{ "source": "/", "destination": "/demo/index.html" }]
}
```

4. Deploy — your URL (for example `https://swiggy-lunchbot.vercel.app`) is the “live demo” link for reviewers.

Local preview: `npm install` then `npm run demo` and open `http://localhost:3456`.

## Architecture

See **[docs/architecture.md](docs/architecture.md)** for a flow diagram and tech choices. At a glance:

- **Slack Bolt** — slash commands, Block Kit, interactive buttons.
- **`order-resolver.js`** — turns votes + constraints into a cart (stub).
- **`swiggy-mcp.js`** — MCP client for `search_restaurants`, `get_menu`, `place_order` (stub).

## Swiggy MCP

See **[docs/mcp-integration.md](docs/mcp-integration.md)** for tool usage, sequence diagram, OAuth outline, and error handling.

## Setup (partial)

1. **Clone** and `npm install`.
2. **Slack app**: create an app, enable Socket Mode or Request URL, add slash command `/swiggy-order`, install to workspace.
3. **Environment** (example names only — adjust to your host):

```bash
SLACK_BOT_TOKEN=xoxb-...
SLACK_SIGNING_SECRET=...
SLACK_APP_TOKEN=xapp-...   # if using Socket Mode
```

4. **`npm start`** — runs `src/bot.js` (responds to `/swiggy-order` with a stub ephemeral message until you wire Block Kit + MCP).

Swiggy MCP credentials and transport URL belong in env vars once the official MCP is available; keep them out of git.

## Repo layout

```
swiggy-lunchbot/
├── README.md
├── demo/
│   └── index.html
├── docs/
│   ├── architecture.md
│   └── mcp-integration.md
├── src/
│   ├── bot.js
│   ├── swiggy-mcp.js
│   └── order-resolver.js
└── package.json
```

## Roadmap

- [ ] Modal for budget, headcount, and channel picker after `/swiggy-order`.
- [ ] Persist sessions + poll state (database).
- [ ] Wire real Swiggy MCP transport and auth; replace stubs in `swiggy-mcp.js`.
- [ ] Resolver: scoring tests + optional LLM for natural-language dietary notes in thread.
- [ ] Post-order: Splitwise / UPI reminder export (optional).

## License

MIT — adjust if you publish under a different license.
