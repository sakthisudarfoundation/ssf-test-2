/**
 * Contact details shown on the Contact page and in the footer.
 */

export const contact = {
  address: "1st Street, Ellappan Nagar, Kanchipuram.",
  phone: "9344943123",
  email: "sakthisudarfoundation@gmail.com",
  officeHours: "6:00 AM - 6:30 PM",

  mapLocation: {
    lat: process.env.NEXT_PUBLIC_MAP_LATITUDE
      ? Number(process.env.NEXT_PUBLIC_MAP_LATITUDE)
      : null,

    lng: process.env.NEXT_PUBLIC_MAP_LONGITUDE
      ? Number(process.env.NEXT_PUBLIC_MAP_LONGITUDE)
      : null,
  },
};
