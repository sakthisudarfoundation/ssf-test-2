/**
 * Donation details shown on the Donate page.
 *
 * This file contains the official bank and UPI details
 * displayed publicly to donors.
 */

export const donation = {
  bank: {
    accountName: "Sakthi Sudar Foundation",
    bankName: "Indian Overseas Bank",
    branch: "Sevilimedu branch",
    accountNumber: "000000000000984",
    ifsc: "IOBS0000949",
  },

  upi: {
    id: "[UPI ID]",
  },

  // Place the real QR code image at /public/images/donation/upi-qr.png
  qrImagePath: "/images/donation/upi-qr.png",

  taxDeduction: {
    section80GConfirmed: false,
  },
};
