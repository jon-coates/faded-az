/**
 * Google Tag Manager dataLayer helpers.
 *
 * The GTM container (GTM-M8MCCZ5L) is loaded in index.html. Everything here
 * just pushes events onto window.dataLayer — triggers and tags are configured
 * in the GTM UI against the event names below.
 */

export const BOOKING_URL = "https://bookings.gettimely.com/fadedaz/book";

/** Fired when a visitor clicks through to the Timely booking system. */
export const BOOKING_CLICK_EVENT = "booking_click";

/** Fired when a visitor clicks a "Book Now" that goes to the internal /book page. */
export const BOOKING_NAV_CLICK_EVENT = "booking_nav_click";

/**
 * Push an event onto the GTM dataLayer.
 * No-ops during the SSR prerender, where there is no window.
 */
export function pushDataLayer(payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Track a click that sends the visitor off to the Timely booking system.
 * This is the intent signal worth wiring a conversion tag to in GTM.
 *
 * @param {object} args
 * @param {string} args.location Where on the site the CTA lives, e.g. "hero".
 * @param {string} [args.label] The visible text of the CTA.
 * @param {string} [args.destination] Where the CTA points.
 */
export function trackBookingClick({
  location,
  label = "Book Now",
  destination = BOOKING_URL,
}) {
  pushDataLayer({
    event: BOOKING_CLICK_EVENT,
    booking_provider: "timely",
    cta_location: location,
    cta_label: label,
    cta_destination: destination,
    page_path: typeof window === "undefined" ? undefined : window.location.pathname,
  });
}

/**
 * Track a "Book Now" click that navigates to the internal /book page rather
 * than straight out to Timely. Useful as an engagement/funnel step — the
 * conversion still happens on the booking_click that follows.
 */
export function trackBookingNavClick({
  location,
  label = "Book Now",
  destination = "/book",
}) {
  pushDataLayer({
    event: BOOKING_NAV_CLICK_EVENT,
    cta_location: location,
    cta_label: label,
    cta_destination: destination,
    page_path: typeof window === "undefined" ? undefined : window.location.pathname,
  });
}
