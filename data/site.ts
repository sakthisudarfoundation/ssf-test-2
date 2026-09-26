/**
 * Central site configuration: organization identity, mission and social links.
 */

export const site = {
  name: "Sakthi Sudar Foundation",

  legalNote:
    "A public charitable trust operating on a service basis, without profit motive.",

  shortDescription:
    "Sakthi Sudar Foundation works across education, healthcare, social welfare, youth development, Tamil heritage, environment and community development in Tamil Nadu.",

  registrationNumber: "36/2026",

  domain: "https://sakthisudarfoundation.org",

  social: {
    facebook:
      "https://www.facebook.com/profile.php?id=61594471844818",

    instagram:
      "https://www.instagram.com/sakthisudarfoundation/",

    youtube:
      "https://www.youtube.com/channel/UChCafphoLaOpZ4Dauc3Pcbg",

    twitter:
      "https://x.com/sakthisudarfdn",
  },

  partners: [] as string[],
};

export function isPlaceholder(value: string): boolean {
  return /^\[.*\]$/.test(value.trim());
}
