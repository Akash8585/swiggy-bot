# Swiggy Lunch Bot

**Slack-native group lunch orders** backed by the Swiggy Food MCP — vote on cuisines, resolve one restaurant and cart within budget, place the order, and post a bill split to the thread.

## Demo

**Live demo:** [https://swiggy-bot.vercel.app/](https://swiggy-bot.vercel.app/) — interactive mock (slash command → vote → match → bill split).

<p align="center">
  <video
    src="https://raw.githubusercontent.com/Akash8585/swiggy-bot/main/uploads/Video%20Project%202.mp4"
    controls
    playsinline
    preload="metadata"
    width="720"
    style="max-width:100%;height:auto;border-radius:12px;border:1px solid #2d3035;background:#1a1d21;"
  >
    Your browser does not support embedded video — <a href="https://raw.githubusercontent.com/Akash8585/swiggy-bot/main/uploads/Video%20Project%202.mp4">open the MP4</a> or use the <a href="./uploads/Video%20Project%202.mp4">repo file link</a>.
  </video>
</p>

<p align="center">
  <a href="https://raw.githubusercontent.com/Akash8585/swiggy-bot/main/uploads/Video%20Project%202.mp4"><strong>Video Project 2.mp4</strong></a>
  ·
  <a href="./uploads/Video%20Project%202.mp4">Same file in the repo</a>
  ·
  Flow: slash command → votes → best match → bill split (<code>demo/index.html</code>)
</p>

## Problem

Team lunch on Swiggy often turns into long threads and mismatched carts. **Swiggy Lunch Bot** keeps the decision in one place: a slash command sets budget and headcount, the team votes on mood, and the bot uses MCP-backed search and menu data to propose a single optimized order. One confirmation places the order; everyone sees what they owe.

## Live demo

Hosted version: **[https://swiggy-bot.vercel.app/](https://swiggy-bot.vercel.app/)** (same UI as **`demo/index.html`**).

To deploy your own fork: import the repo in [Vercel](https://vercel.com) → framework **Other** → use the included **`vercel.json`** so `/` serves the demo.

Local: `npm install` → `npm run demo` → open `http://localhost:3456`.

## Architecture

See **[docs/architecture.md](docs/architecture.md)** for the flow diagram and tech choices.

- **Slack Bolt** — slash commands, Block Kit, interactive buttons  
- **`order-resolver.js`** — votes + constraints → cart (stub)  
- **`swiggy-mcp.js`** — MCP client for `search_restaurants`, `get_menu`, `place_order` (stub)

## Swiggy MCP

See **[docs/mcp-integration.md](docs/mcp-integration.md)** for tools, sequence, OAuth outline, and error handling.

## Setup (partial)

1. Clone and `npm install`.
2. Slack app: slash command `/swiggy-order`, Socket Mode or a public URL, install to workspace.
3. Env vars (see **`.env.example`**):

```bash
SLACK_BOT_TOKEN=xoxb-...
SLACK_SIGNING_SECRET=...
SLACK_APP_TOKEN=xapp-...   # Socket Mode
```

4. `npm start` — runs `src/bot.js` (stub ephemeral reply on `/swiggy-order` until you wire Block Kit + MCP).

## Repo layout

```
swiggy-lunchbot/
├── README.md
├── demo/
│   └── index.html
├── docs/
│   ├── architecture.md
│   └── mcp-integration.md
├── uploads/
│   └── Video Project 2.mp4   ← demo recording
├── src/
│   ├── bot.js
│   ├── swiggy-mcp.js
│   └── order-resolver.js
└── package.json
```

## Roadmap

- [ ] Modal after `/swiggy-order` (budget, headcount, channel)
- [ ] Persist sessions + poll state
- [ ] Real Swiggy MCP transport + auth
- [ ] Resolver tests + optional LLM for dietary notes in thread
- [ ] Optional Splitwise / UPI export

## License

MIT
