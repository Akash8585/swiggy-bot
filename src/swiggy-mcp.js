/**
 * Swiggy Food MCP — thin client stub.
 *
 * Real implementation would:
 * - Discover tools from the MCP server (stdio or HTTP transport)
 * - Map tool names to typed requests/responses
 * - Attach OAuth bearer tokens or session cookies per Swiggy MCP auth spec
 *
 * Expected tools (names illustrative — align with official Swiggy MCP schema):
 * - search_restaurants — lat/lng or place_id, cuisine filters, budget ceiling
 * - get_menu — restaurant_id, optional dietary tags
 * - place_order — cart payload, delivery slot, payment method id
 */

/** @typedef {{ lat: number, lng: number, cuisines?: string[], maxBudgetPerHead?: number }} SearchParams */
/** @typedef {{ restaurantId: string }} MenuParams */
/** @typedef {{ cart: unknown, userId: string }} PlaceOrderParams */

export function createSwiggyMcpClient(_options = {}) {
  return {
    /**
     * @param {SearchParams} params
     * @returns {Promise<{ restaurants: Array<{ id: string; name: string; rating: number }> }>}
     */
    async searchRestaurants(params) {
      void params;
      return { restaurants: [] };
    },

    /**
     * @param {MenuParams} params
     * @returns {Promise<{ items: Array<{ id: string; name: string; price: number }> }>}
     */
    async getMenu(params) {
      void params;
      return { items: [] };
    },

    /**
     * @param {PlaceOrderParams} params
     * @returns {Promise<{ orderId: string; trackingUrl?: string }>}
     */
    async placeOrder(params) {
      void params;
      return { orderId: "SWG-STUB" };
    },
  };
}
