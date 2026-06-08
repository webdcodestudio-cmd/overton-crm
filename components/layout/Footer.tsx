import { Globe2, Shield, Star, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { text } from "stream/consumers";

const contactsDtails = [
  {
    label: "Email",
    icon: <Mail size={14} />,
    text: "info@overton.in",
    href: "mailto:info@overton.in",
  },
  {
    label: "Phone",
    icon: <PhoneCall size={14} />,
    text: "+91 90230 16487",
    href: "tel:+91 90230 16487",
  },
];

// ── FOOTER LINKS — Navbar se match ──
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1E] border-t border-white/10 pb-25">
      {/* MAIN FOOTER */}
      <Container className="relative overflow-hidden">
        <div className="py-16 flex flex-col lg:flex-row justify-between gap-12">
          {/* BRAND COL — 2 cols wide */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Overton CRM"
                width={140}
                height={32}
              />
            </Link>

            {/* Desc */}
            <p className="text-sm text-white/60 leading-relaxed mb-7 max-w-xs">
              India's #1 AI-powered real estate CRM — built exclusively for real
              estate developers, brokers, and mandate firms. Close more deals.
              Manage smarter. From ₹599/month.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: <Globe2 size={14} />,
                  text: "Built for Indian Real Estate",
                },
                { icon: <Shield size={14} />, text: "RERA Compliant" },
              ].map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition"
                >
                  {badge.icon}
                  <span className="text-xs text-white/70">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Us
            </h3>

            <div className="space-y-4">
              {contactsDtails.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center lg:justify-start gap-3 text-white/70 hover:text-white transition"
                >
                  <span className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </span>

                  <div>
                    <p className="text-xs text-white/40">{item.label}</p>

                    <p className="text-sm font-medium">{item.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM BAR */}
      <Container className="relative overflow-hidden">
        <div className="text-sm text-white/50 text-center flex md:justify-between flex-wrap justify-center gap-3 pt-5">
          {/* Copyright */}
          <p className="text-sm text-white/50 text-center sm:text-left">
            © 2025 Overton CRM. Built for Indian Real Estate. All rights
            reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
