/**
 * Central site configuration: organization identity, mission and social
 * links. Edit this file to update copy that appears in the navbar,
 * footer and homepage.
 *
 * IMPORTANT: only edit the VALUES below. Do not put invented facts
 * (history, statistics, achievements) here — leave bracketed
 * placeholders until real information is supplied.
 */

export const site = {
  name: "Sakthi Sudar Foundation",
  legalNote: "A public charitable trust operating on a service basis, without profit motive.",
  shortDescription:
    "Sakthi Sudar Foundation works across education, healthcare, social welfare, youth development, Tamil heritage, environment and community development in Tamil Nadu.",
  registrationNumber: "[REGISTRATION NUMBER]",
  eightyG: "[80G REGISTRATION NUMBER]", // leave as placeholder until confirmed
  twelveA: "[12A REGISTRATION NUMBER]",
  domain: "https://sakthisudarfoundation.org", // update once the real domain is confirmed

  // Set each to a real URL once the official account exists. Leave the
  // bracketed placeholder to hide that icon in the footer.
  social: {
    facebook: "[FACEBOOK URL]",
    instagram: "[INSTAGRAM URL]",
    youtube: "[YOUTUBE URL]",
    twitter: "[X/TWITTER URL]",
  },

  // Named partner organizations — only list a partner once an actual,
  // confirmed relationship exists. Leave empty to hide the partner strip.
  partners: [] as string[],
};

export function isPlaceholder(value: string): boolean {
  return /^\[.*\]$/.test(value.trim());
}
