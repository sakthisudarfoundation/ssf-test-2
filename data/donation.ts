/**
 * Donation details shown on the Donate page.
 *
 * Replace every bracketed placeholder below with the official bank
 * and UPI details. This file is intentionally plain, editable data —
 * NOT an environment variable and NOT encrypted — because this
 * information is meant to be shown publicly to donors.
 *
 * Do not commit real values you aren't ready to publish; anything in
 * this file ships to the deployed site as-is.
 */

export const donation = {
  bank: {
    accountName: "[ACCOUNT NAME]",
    bankName: "[BANK NAME]",
    branch: "[BRANCH NAME]",
    accountNumber: "[ACCOUNT NUMBER]",
    ifsc: "[IFSC CODE]",
  },
  upi: {
    id: "[UPI ID]",
  },
  // Place the real QR code image at /public/images/donation/upi-qr.png —
  // the Donate page will pick it up automatically. Until then, a
  // "QR code coming soon" placeholder is shown.
  qrImagePath: "/images/donation/upi-qr.png",
  taxDeduction: {
    // Only set to true once official 80G registration is confirmed —
    // see data/site.ts eightyG field.
    section80GConfirmed: false,
  },
};
