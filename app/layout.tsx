import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-BricolageGrotesque",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ── BASE CONFIG ──
const BASE_URL = "https://overton.in";
const COMPANY_NAME = "Overton CRM";
const TAGLINE = "AI-Powered Real Estate CRM for Developers & Brokers";
const PHONE = "+919023016487";
const EMAIL = "info@overton.in";

export const metadata: Metadata = {
  // ══════════════════════════
  // BASIC SEO
  // ══════════════════════════
  metadataBase: new URL(BASE_URL),

  title: {
    default: `${COMPANY_NAME} — ${TAGLINE} for Developers & Brokers`,
    template: `%s | ${COMPANY_NAME}`,
  },

  description:
    "Overton CRM is an AI-powered real estate CRM built for Indian developers, brokers, and mandate firms. AI qualifies leads automatically, generates RERA-compliant documents in 60 seconds, tracks stage-wise payments, integrates with 99acres, MagicBricks & Housing.com. Start free for 30 days — no credit card. From ₹599/month.",

  keywords: [
    // Primary
    "real estate CRM India",

    // Secondary
    "CRM for real estate developers India",
    "broker CRM software India",
    "AI real estate CRM",
    "RERA compliant CRM software",
    "real estate lead management software India",

    // Long-tail
    "real estate CRM Ahmedabad",
    "real estate CRM Gujarat",
    "best CRM for property developers India",
    "99acres MagicBricks CRM integration",
    "WhatsApp CRM real estate India",
    "real estate CRM free trial India",
    "AI lead qualification real estate",
    "RERA document generation software",
    "stage wise payment tracking CRM",
    "property developer CRM software",
    "broker pipeline management software",
    "real estate sales CRM India",
    "best real estate CRM India 2025",
    "CRM for developers",
    "CRM for brokers",
    "RERA CRM software",
    "99acres CRM",
    "MagicBricks CRM",
  ],

  authors: [
    {
      name: COMPANY_NAME,
      url: BASE_URL,
    },
  ],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  category: "Business Software",

  // ══════════════════════════
  // ROBOTS
  // ══════════════════════════
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ══════════════════════════
  // CANONICAL
  // ══════════════════════════
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
    },
  },

  // ══════════════════════════
  // OPEN GRAPH
  // ══════════════════════════
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — ${TAGLINE} for Developers & Brokers`,
    description:
      "AI-powered real estate CRM for Indian developers and brokers. Manage leads, inventory, payments, WhatsApp communication, and RERA workflows from a single platform.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — ${TAGLINE}`,
        type: "image/png",
      },
    ],
  },

  // ══════════════════════════
  // TWITTER CARD
  // ══════════════════════════
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — AI Real Estate CRM for Indian Developers & Brokers`,
    description:
      "India's AI-powered real estate CRM. Auto-qualify leads, generate RERA documents, track payments. Free 30-day trial from ₹599/month.",
    images: ["/twitter-image"],
    // Twitter handle nahi hai — isliye site/creator remove kiya
  },

  // ══════════════════════════
  // ICONS
  // ══════════════════════════
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },

  // ══════════════════════════
  // MANIFEST
  // ══════════════════════════
  manifest: "/manifest.json",

  // ══════════════════════════
  // VERIFICATION (baad mein add karna)
  // ══════════════════════════
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body
        className={`${bricolageGrotesque.variable} ${instrumentSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        {/* ── GOOGLE ANALYTICS ── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F2WYSX2P64"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F2WYSX2P64');
          `}
        </Script>

        {/* ── CALENDLY ── */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
