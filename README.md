# Swiggy Lunch Bot

Small idea for a Slack app: the team picks a vibe (biryani, pizza, whatever), the bot narrows it down to one Swiggy order inside a per-person budget, then drops a bill split in the thread so nobody has to do math in chat.

**Demo:** [Video Project 2.mp4](uploads/Video%20Project%202.mp4)

<video src="uploads/Video%20Project%202.mp4" controls playsinline width="720"></video>

The interactive mock is in [`demo/index.html`](demo/index.html). Open it in a browser, or run `npm install` and `npm run demo` to serve it locally on port 3456.

---

**What’s actually here right now:** a static demo of the Slack thread (slash command → votes → “best match” cart → bill split), plus stub Node files for a future Bolt app and Swiggy MCP client. Nothing hits Swiggy or Slack until you wire tokens and real handlers.

**Docs:** [architecture](docs/architecture.md) · [MCP integration notes](docs/mcp-integration.md)

**Slack stub:** copy `.env.example` to `.env`, drop in a bot token / signing secret / app token if you’re using socket mode, then `npm start`. `/swiggy-order` only replies with a short placeholder message for now.

License: MIT.
