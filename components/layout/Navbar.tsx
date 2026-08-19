"use client";

import {
  Building2,
  Handshake,
  ClipboardList,
  Sparkles,
  Package,
  Scale,
  MessageCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "@/components/ui/Container";

// ── NAV DATA ──
const navItems = [
  {
    label: "AI Sales Assistant",
    href: "#ai-features-showcase",
  },
  {
    label: "Solutions",
    href: "#solutions",
  },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// ── ICON COLOR MAP ──
const iconColors: Record<string, string> = {
  blue: "bg-[#EEF1FE] text-[#3D5AF1]",
  green: "bg-[#EDFBF4] text-[#0EA05B]",
  ai: "bg-[#F3EFFE] text-[#7C3AED]",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <Container className="h-16 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo.png"
            alt="Overton CRM"
            width={130}
            height={36}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {/* NAV LINK */}
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-dark hover:text-brand transition-colors rounded-lg hover:bg-gray-50 whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button
            href="https://crm.overton.in/#/signup"
            variant="primary"
            size="sm"
            className="flex gap-1"
          >
            Start Free Trial <ArrowRight size={16} />
          </Button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-lg border border-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 max-h-[85vh] overflow-y-auto overscroll-contain">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-3 py-3 text-sm font-medium text-dark hover:text-brand transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
              <div className="h-px bg-gray-50" />
            </div>
          ))}

          {/* MOBILE BUTTONS */}
          <div className="flex flex-col gap-3 pt-3">
            <Button
              href="https://crm.overton.in/#/signup"
              variant="primary"
              size="md"
              className="flex gap-1"
            >
              Start Free Trial <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
