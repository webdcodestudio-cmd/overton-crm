import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

// ── FONTS ──
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-BricolageGrotesque",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Overton CRM — India's #1 AI Real Estate CRM for Developers & Brokers",
    template: "%s | Overton CRM",
  },
  description:
    "India's only AI-powered real estate CRM built for developers and brokers. AI qualifies leads, generates RERA-compliant documents, tracks payments. Free 30-day trial from ₹999/month.",
  keywords: [
    "real estate CRM India",
    "AI real estate CRM",
    "CRM for real estate developers India",
    "broker CRM software India",
    "RERA compliant CRM",
    "99acres MagicBricks CRM integration",
  ],
  openGraph: {
    type: "website",
    siteName: "Overton CRM",
    title: "Overton CRM — India's #1 AI Real Estate CRM",
    description:
      "AI qualifies leads before your team calls. RERA documents auto-generated. Free 30-day trial from ₹999/month.",
    url: "https://www.overtoncrm.in",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overton CRM — AI Real Estate CRM for Indian Developers & Brokers",
    description:
      "India's only AI-powered real estate CRM. Auto-qualify leads, generate RERA documents. Free 30-day trial from ₹999/month.",
  },
  alternates: {
    canonical: "https://www.overtoncrm.in",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${instrument.variable}`}>
        <Navbar />
        <main className="pt-16 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}