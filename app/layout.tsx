import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTop } from "@/components/shared/back-to-top";
import { LoadingScreen } from "@/components/shared/loading-screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakthisudarfoundation.org"),
  title: {
    default: "Sakthi Sudar Foundation | Charitable Trust, Tamil Nadu",
    template: "%s | Sakthi Sudar Foundation",
  },
  description:
    "Sakthi Sudar Foundation is a public charitable trust in Tamil Nadu working in education, healthcare, social welfare, environment and Tamil heritage.",
  keywords: [
    "Sakthi Sudar Foundation",
    "charitable trust Tamil Nadu",
    "NGO Tamil Nadu",
    "donate Tamil Nadu",
    "Tamil heritage foundation",
  ],
  openGraph: {
    title: "Sakthi Sudar Foundation",
    description:
      "A public charitable trust in Tamil Nadu working in education, healthcare, social welfare, environment and Tamil heritage.",
    url: "https://sakthisudarfoundation.org",
    siteName: "Sakthi Sudar Foundation",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakthi Sudar Foundation",
    description:
      "A public charitable trust in Tamil Nadu working in education, healthcare, social welfare, environment and Tamil heritage.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-body antialiased">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
