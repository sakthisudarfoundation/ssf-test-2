/**
 * Contact details shown on the Contact page and in the footer.
 * Replace every bracketed placeholder with the real, official value.
 *
 * Map: set lat/lng once the trust's exact registered location is
 * confirmed. You can also override these via the MAP_LATITUDE /
 * MAP_LONGITUDE environment variables at deploy time — env vars take
 * priority over the values below if both are set.
 */

export const contact = {
  address: "[TRUST REGISTERED ADDRESS]",
  phone: "[PHONE NUMBER]",
  email: "[OFFICIAL EMAIL]",
  officeHours: "[OFFICE HOURS]",
  mapLocation: {
    lat: process.env.MAP_LATITUDE ? Number(process.env.MAP_LATITUDE) : null,
    lng: process.env.MAP_LONGITUDE ? Number(process.env.MAP_LONGITUDE) : null,
  },
};
