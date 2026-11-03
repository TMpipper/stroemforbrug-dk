/**
 * The app takeover (owner, 3 Nov 2026: »Full takeover 3 days«, aiming for the top of Top Free Utilities): until
 * 5 Nov 2026 23:59 Copenhagen the bottom bar opens at once instead of after the first screen, and yields only to the
 * footer. Ends by itself — the client checks the clock, so a page cached from before the end behaves normally after it.
 */
export const TAKEOVER_END = "2026-11-06T00:00:00+01:00";
export const TAKEOVER_END_MS = Date.parse(TAKEOVER_END);

export function takeoverOn(now: number = Date.now()): boolean {
  return now < TAKEOVER_END_MS;
}
