/**
 * Slack Bolt app entry — group lunch flow (stub).
 *
 * Intended flow:
 * 1. Slash command /swiggy-order → modal or ephemeral to collect budget + headcount
 * 2. Bot posts to channel with Block Kit poll (cuisine / mood)
 * 3. On deadline or unanimous signal → order-resolver picks restaurant + cart
 * 4. swiggy-mcp places order; bot posts bill-split blocks + thread links
 *
 * Wire-up checklist: SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET, APP_TOKEN (socket mode)
 * or HTTP mode with a public URL for interactivity.
 */

import { App, LogLevel } from "@slack/bolt";

// import { createSwiggyMcpClient } from "./swiggy-mcp.js";
// import { resolveGroupOrder } from "./order-resolver.js";

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  logLevel: LogLevel.INFO,
});

/** Slash: open configuration — replace with modal + channel picker. */
app.command("/swiggy-order", async ({ ack, respond }) => {
  await ack();
  await respond({
    text: "Swiggy Lunch Bot (stub): configure budget, headcount, and channel in code — see README.",
    response_type: "ephemeral",
  });
});

/** Example button handler for “Place order” style actions. */
app.action("PLACE_ORDER_STUB", async ({ ack }) => {
  await ack();
  // const mcp = createSwiggyMcpClient();
  // await mcp.placeOrder(/* cartId */);
});

(async () => {
  const port = Number(process.env.PORT) || 3000;
  await app.start(port);
  console.log(`Bolt app (stub) listening on ${port}`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
