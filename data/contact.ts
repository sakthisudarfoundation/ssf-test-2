/**
 * Contact details shown on the Contact page and in the footer.
 *
 * Replace every bracketed placeholder with the real, official value.
 */

export const contact = {
  address: "[TRUST REGISTERED ADDRESS]",
  phone: "[PHONE NUMBER]",
  email: "[OFFICIAL EMAIL]",
  officeHours: "[OFFICE HOURS]",

  mapLocation: {
    lat: process.env.NEXT_PUBLIC_MAP_LATITUDE
      ? Number(process.env.NEXT_PUBLIC_MAP_LATITUDE)
      : null,

    lng: process.env.NEXT_PUBLIC_MAP_LONGITUDE
      ? Number(process.env.NEXT_PUBLIC_MAP_LONGITUDE)
      : null,
  },
};
