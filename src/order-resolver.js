/**
 * AI / rules hybrid: turn Slack votes + constraints into a single restaurant + cart.
 *
 * Inputs (shape illustrative):
 * - votes: Record<cuisineTag, count>
 * - headcount: number
 * - budgetPerHead: INR
 * - deliveryLocation: { lat, lng } from Slack workspace default or user-shared pin
 *
 * Steps:
 * 1. Call MCP search_restaurants with merged filters (winning cuisines, price band)
 * 2. For top K restaurants, fetch menus (get_menu), score dishes for coverage + popularity
 * 3. Build a cart that minimizes total while covering dietary notes (future: thread replies)
 * 4. Return { restaurant, lineItems, totals, perPersonShare } for Block Kit + bill split
 */

/**
 * @param {{
 *   votes: Record<string, number>;
 *   headcount: number;
 *   budgetPerHead: number;
 *   searchRestaurants: (q: unknown) => Promise<{ restaurants: unknown[] }>;
 *   getMenu: (id: string) => Promise<{ items: unknown[] }>;
 * }} ctx
 */
export async function resolveGroupOrder(ctx) {
  void ctx;
  return {
    restaurant: null,
    lineItems: [],
    totals: { subtotal: 0, grandTotal: 0 },
    perPersonShare: [],
  };
}
