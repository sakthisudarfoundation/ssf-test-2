/**
 * Upcoming events shown on the Home page. Starts empty — do not invent
 * events, dates or locations. Add a real entry here once an event is
 * scheduled and confirmed.
 */

export interface EventItem {
  date: string;
  title: string;
  place: string;
}

export const events: EventItem[] = [];
