/** Shared formatting helpers. */

/** Format an ISO date string as e.g. "March 2026" (no day). */
export function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}
